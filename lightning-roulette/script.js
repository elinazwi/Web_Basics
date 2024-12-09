document.addEventListener('DOMContentLoaded', () => {
    const mainNumbers = document.querySelector('.main-numbers');
    const activeBets = document.getElementById('active-bets');
    const totalBetDisplay = document.getElementById('total-bet');
    const spinButton = document.getElementById('spin-btn');
    const clearBetsButton = document.getElementById('clear-bets');
    const betAmountInput = document.getElementById('bet-amount');
    const balanceDisplay = document.getElementById('balance');
    const resultMessage = document.getElementById('result-message');
    const historyNumbers = document.querySelector('.history-numbers');
    const wheel = document.querySelector('.wheel');

    let balance = 1000;
    let currentBets = new Map(); // Maps bet positions to amounts
    let numberHistory = [];

    // Create number buttons
    for (let i = 1; i <= 36; i++) {
        const button = document.createElement('button');
        button.className = `number-btn ${isRed(i) ? 'red' : 'black'}`;
        button.textContent = i;
        button.dataset.number = i;
        mainNumbers.appendChild(button);
    }

    function isRed(number) {
        const redNumbers = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36];
        return redNumbers.includes(number);
    }

    function updateTotalBet() {
        const total = Array.from(currentBets.values()).reduce((sum, bet) => sum + bet, 0);
        totalBetDisplay.textContent = total;
        return total;
    }

    function placeBet(position, amount) {
        if (balance >= amount) {
            currentBets.set(position, (currentBets.get(position) || 0) + amount);
            balance -= amount;
            balanceDisplay.textContent = balance;
            
            const betChip = document.createElement('div');
            betChip.className = 'bet-chip';
            betChip.textContent = `${position}: ${amount}`;
            activeBets.appendChild(betChip);
            
            updateTotalBet();
        } else {
            showNotification('Insufficient balance!', false);
        }
    }

    function clearBets() {
        const totalBet = updateTotalBet();
        balance += totalBet;
        balanceDisplay.textContent = balance;
        currentBets.clear();
        activeBets.innerHTML = '';
        updateTotalBet();
        document.querySelectorAll('.number-btn.selected').forEach(btn => {
            btn.classList.remove('selected');
        });
    }

    function showNotification(message, isWin) {
        const notification = document.createElement('div');
        notification.className = `notification ${isWin ? 'win' : 'lose'}`;
        notification.textContent = message;
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.remove();
        }, 4000);
    }

    function calculateWinnings(winningNumber) {
        let totalWinnings = 0;
        let winningBets = [];

        currentBets.forEach((amount, bet) => {
            let won = false;
            let multiplier = 0;

            // Convert bet to string for comparison
            const betStr = bet.toString();
            const winningNumberStr = winningNumber.toString();

            // Straight up number bet
            if (betStr === winningNumberStr) {
                multiplier = 35;
                won = true;
            }
            // Red/Black bets
            else if ((betStr === 'red' && isRed(winningNumber)) || 
                     (betStr === 'black' && !isRed(winningNumber))) {
                multiplier = 1;
                won = true;
            }
            // Odd/Even bets
            else if ((betStr === 'odd' && winningNumber % 2 === 1) || 
                     (betStr === 'even' && winningNumber % 2 === 0 && winningNumber !== 0)) {
                multiplier = 1;
                won = true;
            }
            // 1-18 / 19-36 bets
            else if ((betStr === '1-18' && winningNumber >= 1 && winningNumber <= 18) || 
                     (betStr === '19-36' && winningNumber >= 19 && winningNumber <= 36)) {
                multiplier = 1;
                won = true;
            }
            // Dozens bets
            else if ((betStr === '1st12' && winningNumber >= 1 && winningNumber <= 12) ||
                     (betStr === '2nd12' && winningNumber >= 13 && winningNumber <= 24) ||
                     (betStr === '3rd12' && winningNumber >= 25 && winningNumber <= 36)) {
                multiplier = 2;
                won = true;
            }

            if (won) {
                const winAmount = amount * (multiplier + 1); // Adding original bet back
                totalWinnings += winAmount;
                winningBets.push(`${bet}: ${winAmount}`);
            }
        });

        return { totalWinnings, winningBets };
    }

    function addToHistory(number) {
        numberHistory.unshift(number);
        if (numberHistory.length > 10) numberHistory.pop();
        
        historyNumbers.innerHTML = '';
        numberHistory.forEach(num => {
            const historyNumber = document.createElement('div');
            historyNumber.className = `history-number ${isRed(num) ? 'red' : 'black'}`;
            historyNumber.textContent = num;
            historyNumbers.appendChild(historyNumber);
        });
    }

    // Event Listeners
    document.querySelectorAll('.number-btn, .special-btn').forEach(button => {
        button.addEventListener('click', () => {
            const betAmount = parseInt(betAmountInput.value);
            if (isNaN(betAmount) || betAmount <= 0) {
                showNotification('Please enter a valid bet amount!', false);
                return;
            }
            
            const position = button.dataset.number || button.dataset.bet;
            placeBet(position, betAmount);
            button.classList.add('selected');
        });
    });

    clearBetsButton.addEventListener('click', clearBets);

    spinButton.addEventListener('click', () => {
        if (currentBets.size === 0) {
            showNotification('Please place at least one bet!', false);
            return;
        }

        const totalBet = updateTotalBet();
        
        // Disable controls during spin
        spinButton.disabled = true;
        clearBetsButton.disabled = true;
        document.querySelectorAll('.number-btn, .special-btn').forEach(btn => {
            btn.disabled = true;
        });

        wheel.classList.add('spinning');
        const winningNumber = Math.floor(Math.random() * 37); // 0-36

        setTimeout(() => {
            wheel.classList.remove('spinning');
            addToHistory(winningNumber);

            const { totalWinnings, winningBets } = calculateWinnings(winningNumber);

            // Highlight winning number
            document.querySelectorAll('.number-btn').forEach(btn => {
                if (parseInt(btn.dataset.number) === winningNumber) {
                    btn.classList.add('winning');
                }
            });

            if (totalWinnings > 0) {
                balance += totalWinnings;
                showNotification(
                    `Winner!\nNumber: ${winningNumber}\nBet: ${totalBet}\nWon: ${totalWinnings}\nNet: ${totalWinnings - totalBet}`, 
                    true
                );
            } else {
                showNotification(
                    `No Win\nNumber: ${winningNumber}\nLost: ${totalBet}`, 
                    false
                );
            }

            balanceDisplay.textContent = balance;
            currentBets.clear();
            activeBets.innerHTML = '';
            updateTotalBet();

            // Re-enable controls
            spinButton.disabled = false;
            clearBetsButton.disabled = false;
            document.querySelectorAll('.number-btn, .special-btn').forEach(btn => {
                btn.disabled = false;
                btn.classList.remove('selected');
            });

            // Remove winning highlight after delay
            setTimeout(() => {
                document.querySelectorAll('.winning').forEach(btn => {
                    btn.classList.remove('winning');
                });
            }, 2000);
        }, 3000);
    });
}); 