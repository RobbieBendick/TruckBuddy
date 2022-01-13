$(document).ready(() => {
    var autocomplete;
    function initAutocomplete() {
        autocomplete = new google.maps.places.Autocomplete(
            $("#auto-complete"),
            {
                types: ["locality"],
                fields: ['geometry']
            }
        )
    }
})