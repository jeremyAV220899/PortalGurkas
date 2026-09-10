function limpiar() {
    document.querySelectorAll(".error-text").forEach(e => e.textContent = "");
    document.querySelectorAll(".kt-input,.kt-select").forEach(e => {
        e.classList.remove("input-error", "input-success");
    });
}

function validarRegex(id, regex, msg) {
    const el = document.getElementById(id);
    if (!regex.test(el.value)) {
        error(el, id, msg);
        return false;
    }
    ok(el);
    return true;
}

function validarTexto(id, min, msg) {
    const el = document.getElementById(id);
    if (el.value.trim().length < min) {
        error(el, id, msg);
        return false;
    }
    ok(el);
    return true;
}

function validarEdad(id, msg) {
    const el = document.getElementById(id);
    if (el.value === "") {
        error(el, id, msg);
        return false;
    }
    ok(el);
    return true;
}

function validarSelect(id, msg) {

    const el = document.getElementById(id);

    if (el.value === "" || el.value === null) {
        errorsele(el, id, msg);
        return false;
    }

    oksele(el, id);
    return true;

}

function error(el, id, msg) {
    el.classList.add("input-error");
}

function ok(el) {
    el.classList.add("input-success");
}

function errorsele(el, id, msg) {

    const container = el.closest(".grow");

    el.classList.add("input-error");

    if (container) {
        container.classList.add("select-error");
    }

}

function oksele(el, id) {

    const container = el.closest(".grow");

    el.classList.remove("input-error");

    if (container) {
        container.classList.remove("select-error");
    }
}
