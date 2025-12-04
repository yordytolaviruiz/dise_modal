document.addEventListener('DOMContentLoaded', function() {
    // Elementos del DOM
    const btnOpen = document.querySelector('.btn-open');
    const btnClose = document.querySelector('.btn-close');
    const modalOverlay = document.querySelector('.modal-overlay');
    
    // Abrir modal
    btnOpen.addEventListener('click', function() {
        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Evitar scroll
        console.log('Modal abierto');
    });
    
    // Cerrar modal con botón X
    btnClose.addEventListener('click', function() {
        closeModal();
    });
    
    // Cerrar modal haciendo clic fuera del contenido
    modalOverlay.addEventListener('click', function(e) {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });
    
    // Cerrar modal con tecla Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
            closeModal();
        }
    });
    
    // Función para cerrar modal
    function closeModal() {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
        console.log('Modal cerrado');
    }
    
    // Efecto adicional para los botones de acción del modal
    const modalActionButtons = document.querySelectorAll('.btn-modal-action');
    modalActionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const buttonText = this.textContent.trim();
            alert(`Acción: ${buttonText}`);
            
            // Animación de clic
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
    
    // Efecto de hover en las tarjetas de estudiantes
    const studentCards = document.querySelectorAll('.student-card');
    studentCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Efecto de clic en el botón de abrir modal
    btnOpen.addEventListener('mousedown', function() {
        this.style.transform = 'scale(0.95) translateY(-3px)';
    });
    
    btnOpen.addEventListener('mouseup', function() {
        this.style.transform = 'translateY(-3px)';
    });
    
    btnOpen.addEventListener('mouseleave', function() {
        this.style.transform = '';
    });
});