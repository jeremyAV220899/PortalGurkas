function cerrarModal(idModal) {

    const modalEl = document.getElementById(idModal);

    if (!modalEl) return;

    const modal = KTModal.getInstance(modalEl);

    if (modal) {
        modal.hide();
    }
}