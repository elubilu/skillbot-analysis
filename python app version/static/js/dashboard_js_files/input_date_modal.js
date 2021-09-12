export function displayModal(title,interval){
    $('#date-input-modal-title').text(title+' - '+interval);
    $('#date-input-modal').modal();
}
