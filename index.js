class Modals {
    constructor()
    {
        this.init();
    }

    /**
     * Inizializzo le variabili e gli eventi
     */
    init()
    {
        this._modals = document.querySelectorAll('.modal');
        this._modalsLinks = document.querySelectorAll('[data-open]');
        this._modals.forEach( (modal) => {
            this.createModalsListeners(modal);
        } );
        this._modalsLinks.forEach( link => {
            this.createAnchorsListeners(link);
        });
    }

    /**
     * Aggiungi gli eventi di chiusura del modal
     * @param modal
     */
    createModalsListeners(modal)
    {
        const modalButton = modal.getElementsByClassName('modal__button')[0];

        modal.addEventListener('click', this.closeModal, true);
        modalButton.addEventListener('click', this.closeModal, true);
    }

    /**
     * Aggiungo gli eventi ai link di apertura
     * @param link
     */
    createAnchorsListeners(link)
    {
        link.addEventListener('click', this.openModal, true);
    }

    /**
     * Apro il modale
     * @param event
     */
    openModal(event)
    {
        event.preventDefault();
        const id = event.target.getAttribute('data-open');
        const modal = document.getElementById(id);

        document.getElementsByTagName('body')[0].classList.add('overflow-hidden');
        modal.classList.add('block');
        modal.classList.remove('hidden');
    }

    /**
     * Chiudo il modale se clicco nell'overlay o nel tasto di chiusura
     * @param event
     */
    closeModal(event)
    {
        event = window.event || event;
        if (this === event.target) {
            document.getElementsByTagName('body')[0].classList.remove('overflow-hidden');
            if (event.target.classList.contains('modal__button') ) {
                this.parentNode.parentNode.classList.add('hidden' );
            } else {
                this.classList.remove('block');
            }
        }
    }
}

const modals = new Modals();
export default modals;