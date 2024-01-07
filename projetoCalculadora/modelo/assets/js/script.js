function Calculadora() {

    display: document.querySelector('.display'),


        this.inicia = function inicia() {
            this.cliqueBotoes();
            this.precionaEnter();
            this.precionaDelete();
        },

        clearDisplay() {
        this.display.value = '';
    },

    apagaUm() {
        this.display.value = this.display.value.slice(0, -1)
    },

    realizaConta() {
        let conta = this.display.value.replace(',', '.');

        try {
            conta = eval(conta);

            if (!conta) {
                alert('Conta Invalida!');
                return;
            }

            if (conta === Infinity) {
                this.display.value = 'Indefinido'
            } else {
                this.display.value = String(conta);

            }

        } catch (e) {
            alert('Conta Invalida!');
            return;
        }
    },

    precionaEnter() {
        document.addEventListener('keyup', e => {
            if (e.key == 'Enter') {
                this.realizaConta();
            }
        });
    },

    precionaDelete() {
        document.addEventListener('keyup', e => {
            if (e.key == "Delete") {
                this.clearDisplay();
            }
        })
    },

    cliqueBotoes() {
        document.addEventListener('click', e => {
            const el = e.target;
            if (el.classList.contains('btn-num')) {
                this.btnParaDisplay(el.innerText);
            }

            if (el.classList.contains('btn-clear')) {
                this.clearDisplay();
            }

            if (el.classList.contains('btn-del')) {
                this.apagaUm();
            }

            if (el.classList.contains('btn-eq')) {
                this.realizaConta();
            }
        })
    },

    btnParaDisplay(valor) {
        this.display.value += valor;

    }

}

const calculadora = criaCalculadora();
calculadora.inicia();