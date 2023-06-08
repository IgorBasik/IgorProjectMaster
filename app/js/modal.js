jQuery(document).ready(function ($) {
    $('#engine-type').on('change', function () {
        //какие-то действия
        let engine_type = $(this).val()
        if (engine_type === 'hybrid') {
            $('#hybrid-type-wrapper').removeClass('d-none')

        } else {
            $('#hybrid-type-wrapper')
                .removeClass('d-none')
                .addClass('d-none');
            $('#hybrid-type-fuel')
                .removeClass('d-none')
                .addClass('d-none')
        }
    })
    $('#hybrid-type').on('change', function () {
        //какие-то действия
        let hybrid_type = $(this).val()
        $('#hybrid-type-fuel').removeClass('d-none')

    })
});
$(document).ready(function () {
    // Function to load the calculator.html content into the modal
    function loadCalculatorModal() {
      $.ajax({
        url: 'calculator.html',
        success: function (data) {
          $('#exampleModal .modal-content').html(data);
        }
      });
    }
  
    // Event listener to trigger the modal and load the calculator.html content
    $('.btn-calculator').click(function (e) {
      e.preventDefault();
      loadCalculatorModal();
      $('#exampleModal').modal('show');
    });
  
    // Event listener to reset the form fields and hide additional fields when the modal is hidden
    $('#exampleModal').on('hidden.bs.modal', function () {
      $('#vehicle-type').val(''); // reset vehicle type dropdown
      $('#engine-type').val(''); // reset engine type dropdown
      $('#year-of-manufacture').val(''); // reset year of manufacture input
      $('#engine-volume').val(''); // reset engine volume input
      $('#hybrid-type-wrapper').addClass('d-none'); // hide hybrid type dropdown
      $('#hybrid-type-fuel').addClass('d-none'); // hide hybrid type fuel dropdown
      $('.calculations').addClass('d-none'); // hide all rows with calculations
      $('#motor-type').addClass('d-none'); // hide hybrid type fuel dropdown
      $('#car-price').val(''); // reset car-price cost input
    });
  });



