
$(document).ready(function () {


    $(".dataTitle.clickable").click(function () {
        $(this).css('background-color', '#fef200');
        $(this).siblings(".popup").css("display", "block");
        $(this).siblings(".arrow").css("border-right-color", "#fef200");
    });
    $(".arrow").click(function () {
        $(this).css('border-right-color', '#fef200');
        $(this).siblings(".popup").css("display", "block");
        $(this).siblings(".dataTitle.clickable").css("background-color", "#fef200");
    });
    $(".thirdcontent .dataTitle.clickable").click(function () {
        $(this).css('border-right-color', '#fef200');
        $(this).parents(".slot").siblings(".popup").css("display", "block");
        $(this).siblings(".arrow").css("border-right-color", "#fef200");
    });
    $(".thirdcontent .arrow").click(function () {
        $(this).css('border-right-color', '#fef200');
        $(this).parents(".slot").siblings(".popup").css("display", "block");
        $(this).parents(".slot").siblings(".popup").css("display", "block");
    });

    $(".ui-droppable-disabled").click(function () {
    });
    $(".firstcontent .clickBanner").click(function () {
        $('.popup').hide();
        $('.dataTitle.clickable').css('background-color', 'transparent');
        $('.wrapper .wholeContent .questions .arrow').css("border-right-color", "black");
        $(this).siblings(".wholeContent").children(".bigPopup").toggle();
        if ($(this).css("background-color") == "rgb(254, 242, 0)") {
            $(this).css("background-color", "#e0dedf");
        }
        else {
            $(this).css("background-color", "rgb(254, 242, 0)");

        }
    });

    $("#thirdTitleB").click(function () {
        $('.popup').hide();
        $('.dataTitle.clickable').css('background-color', 'transparent');
        $('.wrapper .wholeContent .questions .arrow').css("border-right-color", "black");
        $(this).siblings(".wholeContent").children(".bigPopup").toggle();
        if ($(this).css("background-color") == "rgb(254, 242, 0)") {
            $(this).css("background-color", "#f2f0f1");

        }
        else {
            $(this).css("background-color", "rgb(254, 242, 0)");

        }
    });
    $(".wrapper .goldenWord").click(function () {
        $(this).parents(".wholeContent").children(".goldenPopup").css("display", "block");

    });
    $(".correctAns").click(function () {
        var slotNumber = jQuery(this).attr("id");
        $(".popup_" + slotNumber).css("display", "block");
    });

    $(document).mouseup(function (e) {
        var container = $('.popup');
        var container2 = $('.bigPopup');
        var container3 = $('.goldenPopup');

        var par = $('.dataTitle.clickable');
        var par1 = $('.wrapper .wholeContent .questions .arrow');
        var par2 = $('.firstcontent .clickBanner');
        var par3 = $('.secondcontent .clickBanner');
        var par4 = $('.thirdcontent .clickBanner');

        if (e.target.id == "firstpopup") {
            $("#goldenPopup").hide();
        }

        if (e.target.id == "thirdpopup")
            return;
        if ($(e.target).closest('#firstpopup').length) {
            $("#goldenPopup").hide();
            return;
        }
        if ($(e.target).closest('#thirdpopup').length)
            return;
        if (e.target.id == "goldenPopup")
            return;
        if ($(e.target).closest('#goldenPopup').length)
            return;

        if (e.target.id == "clickBanner") {
            container.hide();
            return;
        }
        //For descendants of menu_content being clicked, remove this check if you do not want to put constraint on descendants.
        if ($(e.target).closest('#clickBanner').length)
            return;

        if (e.target.id == "thirdTitleB") {
            container.hide();
            return;
        }
        //For descendants of menu_content being clicked, remove this check if you do not want to put constraint on descendants.
        if ($(e.target).closest('#thirdTitleB').length)
            return;

        $("#goldenPopup").hide();
        $(".bigPopup").hide();
        $("#thirdTitleB").css("background-color", "#f2f0f1");
        $("#clickBanner").css("background-color", "#e0dedf");

        if (!container.is(e.target)
            && container.has(e.target).length === 0) {

            container.hide();
            par.css('background-color', 'transparent');
            par1.css("border-right-color", "black");
        }

    });



    var count = 0;
    $(init);

    function init() {

        $('#element_1').data('number', 1).attr('id', 'card' + 1).draggable({
            containment: '#content',
            stack: '#cardPile div',
            cursor: 'move',
            revert: true
        });
        $('#element_2').data('number', 2).attr('id', 'card' + 2).draggable({
            containment: '#content',
            stack: '#cardPile div',
            cursor: 'move',
            revert: true
        });
        $('#element_3').data('number', 3).attr('id', 'card' + 3).draggable({
            containment: '#content',
            stack: '#cardPile div',
            cursor: 'move',
            revert: true
        });
        $('#element_4').data('number', 4).attr('id', 'card' + 4).draggable({
            containment: '#content',
            stack: '#cardPile div',
            cursor: 'move',
            revert: true
        });
        $('#element_5').data('number', 5).attr('id', 'card' + 5).draggable({
            containment: '#content',
            stack: '#cardPile div',
            cursor: 'move',
            revert: true
        });
        $('#element_6').data('number', 6).attr('id', 'card' + 6).draggable({
            containment: '#content',
            stack: '#cardPile div',
            cursor: 'move',
            revert: true
        });
        $('#element_7').data('number', 7).attr('id', 'card' + 7).draggable({
            containment: '#content',
            stack: '#cardPile div',
            cursor: 'move',
            revert: true
        });
        $('#element_8').data('number', 8).attr('id', 'card' + 8).draggable({
            containment: '#content',
            stack: '#cardPile div',
            cursor: 'move',
            revert: true
        });
        $('#element_9').data('number', 9).attr('id', 'card' + 9).draggable({
            containment: '#content',
            stack: '#cardPile div',
            cursor: 'move',
            revert: true
        });
        $('#element_10').data('number', 10).attr('id', 'card' + 10).draggable({
            containment: '#content',
            stack: '#cardPile div',
            cursor: 'move',
            revert: true
        });
        $('#element_11').data('number', 11).attr('id', 'card' + 11).draggable({
            containment: '#content',
            stack: '#cardPile div',
            cursor: 'move',
            revert: true
        });
        $('#element_12').data('number', 12).attr('id', 'card' + 12).draggable({
            containment: '#content',
            stack: '#cardPile div',
            cursor: 'move',
            revert: true
        });
        $('#element_13').data('number', 13).attr('id', 'card' + 13).draggable({
            containment: '#content',
            stack: '#cardPile div',
            cursor: 'move',
            revert: true
        });
        $('#element_14').data('number', 14).attr('id', 'card' + 14).draggable({
            containment: '#content',
            stack: '#cardPile div',
            cursor: 'move',
            revert: true
        });
        $('#element_15').data('number', 15).attr('id', 'card' + 15).draggable({
            containment: '#content',
            stack: '#cardPile div',
            cursor: 'move',
            revert: true
        });
        $('#element_16').data('number', 16).attr('id', 'card' + 16).draggable({
            containment: '#content',
            stack: '#cardPile div',
            cursor: 'move',
            revert: true
        });
        $('#element_17').data('number', 17).attr('id', 'card' + 17).draggable({
            containment: '#content',
            stack: '#cardPile div',
            cursor: 'move',
            revert: true
        });
        $('#element_18').data('number', 18).attr('id', 'card' + 18).draggable({
            containment: '#content',
            stack: '#cardPile div',
            cursor: 'move',
            revert: true
        });
        $('#element_19').data('number', 19).attr('id', 'card' + 19).draggable({
            containment: '#content',
            stack: '#cardPile div',
            cursor: 'move',
            revert: true
        });
        $('#element_20').data('number', 20).attr('id', 'card' + 20).draggable({
            containment: '#content',
            stack: '#cardPile div',
            cursor: 'move',
            revert: true
        });
        $('#element_21').data('number', 21).attr('id', 'card' + 21).draggable({
            containment: '#content',
            stack: '#cardPile div',
            cursor: 'move',
            revert: true
        });
        $('#element_22').data('number', 22).attr('id', 'card' + 22).draggable({
            containment: '#content',
            stack: '#cardPile div',
            cursor: 'move',
            revert: true
        });
        $('#element_23').data('number', 23).attr('id', 'card' + 23).draggable({
            containment: '#content',
            stack: '#cardPile div',
            cursor: 'move',
            revert: true
        });
        $('#element_24').data('number', 24).attr('id', 'card' + 24).draggable({
            containment: '#content',
            stack: '#cardPile div',
            cursor: 'move',
            revert: true
        });



        // Create the element slots

        $('#slot_1').data('number', 1).droppable({
            accept: '#cardPile div',
            hoverClass: 'hovered',
            drop: handleCardDrop
        });
        $('#slot_2').data('number', 2).droppable({
            accept: '#cardPile div',
            hoverClass: 'hovered',
            drop: handleCardDrop
        });
        $('#slot_3').data('number', 3).droppable({
            accept: '#cardPile div',
            hoverClass: 'hovered',
            drop: handleCardDrop
        });
        $('#slot_4').data('number', 4).droppable({
            accept: '#cardPile div',
            hoverClass: 'hovered',
            drop: handleCardDrop
        });
        $('#slot_5').data('number', 5).droppable({
            accept: '#cardPile div',
            hoverClass: 'hovered',
            drop: handleCardDrop
        });
        $('#slot_6').data('number', 6).droppable({
            accept: '#cardPile div',
            hoverClass: 'hovered',
            drop: handleCardDrop
        });
        $('#slot_7').data('number', 7).droppable({
            accept: '#cardPile div',
            hoverClass: 'hovered',
            drop: handleCardDrop
        });
        $('#slot_8').data('number', 8).droppable({
            accept: '#cardPile div',
            hoverClass: 'hovered',
            drop: handleCardDrop
        });
        $('#slot_9').data('number', 9).droppable({
            accept: '#cardPile div',
            hoverClass: 'hovered',
            drop: handleCardDrop
        });
        $('#slot_10').data('number', 10).droppable({
            accept: '#cardPile div',
            hoverClass: 'hovered',
            drop: handleCardDrop
        });
        $('#slot_11').data('number', 11).droppable({
            accept: '#cardPile div',
            hoverClass: 'hovered',
            drop: handleCardDrop
        });
        $('#slot_12').data('number', 12).droppable({
            accept: '#cardPile div',
            hoverClass: 'hovered',
            drop: handleCardDrop
        });
        $('#slot_13').data('number', 13).droppable({
            accept: '#cardPile div',
            hoverClass: 'hovered',
            drop: handleCardDrop
        });
        $('#slot_14').data('number', 14).droppable({
            accept: '#cardPile div',
            hoverClass: 'hovered',
            drop: handleCardDrop
        });
        $('#slot_15').data('number', 15).droppable({
            accept: '#cardPile div',
            hoverClass: 'hovered',
            drop: handleCardDrop
        });
        $('#slot_16').data('number', 16).droppable({
            accept: '#cardPile div',
            hoverClass: 'hovered',
            drop: handleCardDrop
        });
        $('#slot_17').data('number', 17).droppable({
            accept: '#cardPile div',
            hoverClass: 'hovered',
            drop: handleCardDrop
        });
        $('#slot_18').data('number', 18).droppable({
            accept: '#cardPile div',
            hoverClass: 'hovered',
            drop: handleCardDrop
        });
        $('#slot_19').data('number', 19).droppable({
            accept: '#cardPile div',
            hoverClass: 'hovered',
            drop: handleCardDrop
        });
        $('#slot_20').data('number', 20).droppable({
            accept: '#cardPile div',
            hoverClass: 'hovered',
            drop: handleCardDrop
        });
        $('#slot_21').data('number', 21).droppable({
            accept: '#cardPile div',
            hoverClass: 'hovered',
            drop: handleCardDrop
        });
        $('#slot_22').data('number', 22).droppable({
            accept: '#cardPile div',
            hoverClass: 'hovered',
            drop: handleCardDrop
        });
        $('#slot_23').data('number', 23).droppable({
            accept: '#cardPile div',
            hoverClass: 'hovered',
            drop: handleCardDrop
        });
        $('#slot_24').data('number', 24).droppable({
            accept: '#cardPile div',
            hoverClass: 'hovered',
            drop: handleCardDrop
        });
    }

    function handleCardDrop(event, ui) {
        var slotNumber = $(this).data('number');
        var cardNumber = ui.draggable.data('number');

        if (slotNumber == cardNumber) {
            count++;
            ui.draggable.click(function (e) {
            });

            ui.draggable.draggable('disable');
            ui.draggable.draggable('disable').click(function () {
                $(".popup_" + slotNumber).css("display", "block");
            });

            ui.draggable.children("p").css('margin-left', '25px');
            $(this).droppable('disable');
            $(this).droppable('disable').click(function () {
            });

            ui.draggable.position({ of: $(this), my: 'left top', at: 'left top' });
            ui.draggable.draggable('option', 'revert', false);
            if (count == 24) {
                $('.printButton').attr("href", "print-pdf.pdf");
                $('.printButton').css('background-color', 'black');
            }
        }
    }
});

    function correct() {
            $('.drageable ').css('display', 'none');
            $('.correctAns').css('position', 'absolute');
            $('.correctAns').css('display', 'block');
            $('.printButton').attr("href", "print-pdf.pdf");
            $('.printButton').css('background-color', 'black');
        }
