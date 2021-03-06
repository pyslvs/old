pb = window.pb || {};

(function() {
    if (typeof pb.com != 'undefined') {
        return;
    }

    var sendingComment = false;

    pb.com =
    { gSortScore: function(target) {
        var id = pb.getVal('#jscid');
        var target = pb.getVal('#jsmod');
        if (target == 'news') {
            target = 'blog';
        }
        /*
        // we do this check server side as well, so don't bother here
        else if (target != 'video' && target != 'blog' && target != 'photo' && target != 'poll') {
            //Default, no target
            target="(None)";
            id=0;
        }
        */

        var oldEvents = pb.getEvents('#comment_wrap');

        pb.rmsSend({ mod:'cmt', tar:target, op:'gSortComments', id:id, sort:'score' }, function(oRmsR) {
            pb.setHTML("#comment_wrap",oRmsR.rmsM);

            pb.addEvents('#comment_wrap', oldEvents);

            pb.setCookie('comsort','score',14);
            pb.removeClass("#sortscore");
            pb.addClass("#sortscore", "pb-link sortnavon");
            pb.removeClass("#sorttime");
            pb.addClass("#sorttime", "pb-link sortnavoff");
            pb.removeClass("#wftlink");
            pb.addClass("#wftlink", "pb-link sortnavoff");
            pb.com.backToComments();
        })
    }
    , gSortTime: function(target) {
        var id = pb.getVal('#jscid');
        var target = pb.getVal('#jsmod');
        if (target == 'news') {
            target = 'blog';
        }
        /*
        // we do this check server side as well, so don't bother here
        else if (target != 'video' && target != 'blog' && target != 'photo' && target != 'poll') {
            //Default, no target
            target="(None)";
            id=0;
        }
        */

        var oldEvents = pb.getEvents('#comment_wrap');

        pb.rmsSend({ mod:'cmt', tar:target, op:'gSortComments', id:id, sort:'time' }, function(oRmsR) {
            pb.setHTML("#comment_wrap",oRmsR.rmsM);

            pb.addEvents('#comment_wrap', oldEvents);

            pb.setCookie('comsort','time',14);
            pb.removeClass("#sorttime");
            pb.addClass("#sorttime", "pb-link sortnavon");
            pb.removeClass("#sortscore");
            pb.addClass("#sortscore", "pb-link sortnavoff");
            pb.removeClass("#wftlink");
            pb.addClass("#wftlink", "pb-link sortnavoff");
            pb.com.backToComments();
        })
    }
    , gWTF: function(e, target) {
        var id;
        switch (target) {
        case 'photo':
            id = pb.getVal('#photoid');
            break;
        case 'video':
            id = pb.getVal('#videoid');
            break;
        case 'poll':
            id = pb.getVal('#pollid');
            break;
        case 'blog':
            id = pb.getVal('#newsid');
            break;
        default:
            target = '(None)';
            id = 0;
        }

        pb.rmsSend({ mod:'cmt', tar:target, op:'gWTF', id:id }, function(oRmsR) {
            pb.setHTML("#whofaved_wrap",oRmsR.rmsM);
            pb.com.swapWhoFavedOn();
            pb.com.gWTF = pb.com.swapWhoFavedOn;//No need to re-fetch
        })
    }
    , swapWhoFavedOn: function() {
        pb.hide("#comment_wrap");
        pb.show("#whofaved_wrap");
        pb.removeClass("#sorttime");
        pb.addClass("#sorttime", "pb-link sortnavoff");
        pb.removeClass("#sortscore");
        pb.addClass("#sortscore", "pb-link sortnavoff");
        pb.removeClass("#wftlink");
        pb.addClass("#wftlink", "pb-link sortnavon");
    }

    , backToComments: function() {
        pb.hide("#whofaved_wrap");
        pb.show("#comment_wrap");
    }
    /* props-sync */
    , pC2: function(e,val) {
        var jscid=$("#jscid").val();
        var jsmod=$("#jsmod").val();
        var oS=$(this).parents(".cmcont");
        var iId=parseInt($(oS).attr('id').substring(2));
        pb.rmsSend({ mod:'cmt', tar:jsmod, op:'pC', id:iId, v:val, cid:jscid },pb.com.pCr2);

    }
    , pCr2: function(oRmsR) {
        pb.com.propcFade2(oRmsR['rmsD']['id'],oRmsR['rmsD']['v']);
    }
    , propcFade2: function(id,val) {
        var oS=$("#cm"+id);
        if (val==1) {
            $(oS).find(".pcp").fadeOut(function () {
                $(oS).find(".pcu").html(function(i, val) { return +val+1 });
                $(oS).find(".pcd").removeClass("pcpyes").addClass("pcpno");
                $(oS).find(".pcu").removeClass("pcpno").addClass("pcpyes");
            });
        } else {
            $(oS).find(".pcp").fadeOut(function () {
                $(oS).find(".pcd").html(function(i, val) { return +val+1 });
                $(oS).find(".pcu").removeClass("pcpyes").addClass("pcpno");
                $(oS).find(".pcd").removeClass("pcpno").addClass("pcpyes");
            });
        }
        $(oS).find(".pcp").fadeIn();
    }


    , pC: function(e,val) {
        var jscid=$("#jscid").val();
        var jsmod=$("#jsmod").val();
        var oS=$(this).parents(".cmcont");
        var iId=parseInt($(oS).attr('id').substring(2));

        pb.com.toggleSocialWell(null, false);

        pb.rmsSend({ mod:'cmt', tar:jsmod, op:'pC', id:iId, v:val, cid:jscid },pb.com.pCr);
    }
    , pCr: function(oRmsR) {
            pb.com.propcFade(oRmsR['rmsD']['id'],oRmsR['rmsD']['v']);
    }
    , propcFade: function(id,val) {
        var oS=$("#cm"+id);
        $(oS).find(".pcp").fadeOut(function () {pb.com.propcInc(id,val)});
        $(oS).find(".pcp").fadeIn();
    }
    , propcInc: function(id,val) {
        var oS=$("#cm"+id);
        var target=$(oS).find(".pcp");
        var currentCount=$(target).html();
        currentCount=currentCount.replace(/ prop[s]{0,1}/,'');
        currentCount=currentCount.replace(/\+ /,'');
        currentCount=currentCount.replace(/\- /,'-');
        currentCount=parseInt(currentCount)+parseInt(val);
        if (currentCount>=0) {
            if(currentCount==1) {
                $(target).html('+ '+currentCount);
            } else {
                $(target).html('+ '+currentCount);
            }
        } else {
            $(target).html('- '+Math.abs(currentCount));
        }
    }
    /* comment delete */
    , pD: function() {
        var jscid=$("#jscid").val();
        var jsmod=$("#jsmod").val();
        var oS=$(this).parents(".cmcont");
        var iId=parseInt($(oS).attr('id').substring(2));
        pb.rmsSend({ mod:'cmt', tar:jsmod, op:'pD', id:iId, cid:jscid }, function (oRmsR) {
            var oS=$("#cm"+oRmsR['rmsD']['id']);
            if (oS.index() == 0) {
                oS.parent().slideUp();
            }
            else if ($(oS).parent().find('.cmcont:visible').length == 1) {
                $(oS).parent().find('.replylink').slideUp();
                $(oS).parent().find('.replybox').slideUp();
            }
            $(oS).slideUp();
        });
    }
    , pUD: function() {
        var jscid=$("#jscid").val();
        var jsmod=$("#jsmod").val();
        var oS = $(this).parent().next();
        var p = $(this).parent();
        var iId=parseInt($(oS).attr('id').substring(2));
        pb.rmsSend({ mod:'cmt', tar:jsmod, op:'pUD', id:iId, cid:jscid }, function (oRmsR) {
            var oS=$("#cm"+oRmsR['rmsD']['id']);
            if (oS.index() == 1) {
                oS.parent().find('.cmcont').each(function(i, el) {
                    if ($(el).prev('.dcom-info').length < 1) {
                        $(el).slideUp();
                    }
                });
            }
            $(p).slideUp();
            $(oS).slideUp();
        });
    }
    /* props show */
    , pI: function(e) {
        var oR = this;
        var id = $(oR).parents().find("div.tPI").attr("id");
        if($("#" + id).is(":visible")) {
            $("#" + id).hide();
        } else {
            var jsmod = $("#jsmod").val();
            id = id.substr(4);
            pb.rmsSend({ mod:'cmt', tar:jsmod, op:'pI', id:id },pb.com.pIr);
        }
    }
    , pIr: function(oRmsR) {
        var phtml;
        var phtml2 = "";
        phtml = "<br />*Note: Spam propping comments result in a user ban.<table class=\"tPI\"><tr><td class=\"tPropPosTitle bold\">(+)Positive Props</td><td class=\"tPropNegTitle bold\">(-)Negative Props</td></tr><tr><td>";
        for (var i in oRmsR['rmsD']["propPos"]) {
            if(!isNaN(i)) {
                if(i > 0) {
                    phtml2 += "<br />";
                }
                //phtml2 += "<a href=\"https://" + oRmsR['rmsD']["propPos"][i]["username"] + "." + pbdomain + "\">" + oRmsR['rmsD']["propPos"][i]["username"] + "</a>";
                phtml2 += "<a href=\"" + pbwww + "u/" + oRmsR['rmsD']["propPos"][i]["username"] + "/\">" + oRmsR['rmsD']["propPos"][i]["username"] + "</a>";
            }
        }
        $("#dPI_" + oRmsR['rmsD']['id'] + " .tPropNeg").html("");
        phtml += phtml2 + "</td><td>";
        phtml2 = "";
        for (var i in oRmsR['rmsD']["propNeg"]) {
            if(!isNaN(i)) {
                if(i > 0) {
                    phtml2 += "<br />";
                }
                phtml2 += "<a href=\"" + pbwww + "u/" + oRmsR['rmsD']["propNeg"][i]["username"] + "/\">" + oRmsR['rmsD']["propNeg"][i]["username"] + "</a>";
            }
        }
        phtml += phtml2 + "</td></tr></table><br />";
        $("#dPI_" + oRmsR['rmsD']['id']).html(phtml);
        $("#dPI_" + oRmsR['rmsD']['id']).fadeIn();
    }
    , reply: function(e, el) {
        if (typeof el == 'undefined') el = this;
        var $oS = $(el).parent().parent();
        var iId = parseInt($oS.parent().attr('id').substring(2));
        if (!$oS.find(".pform").html() ) {
            var $oC=$('#pform0').clone(true);

            $oC.show();

            //review comment
            $oC.find(".hide-for-replies").hide();
            $oC.find(".textareaTitle").html('Comment');
            $oC.find('.reviewsubmitbutton').hide();
            $oC.find('.commentsubmitbutton').show();
            //review comment

            $oC.attr("id",'pform'+iId);
            $oS.find(".replybox").append($oC);
            $oS.find(".textbox").focus();
            if ($oS.find(".replyusername").html()) {
                $oS.find(".textbox").val("@" + $oS.find(".replyusername").html() + ": ");
            }
            $oS.find(".replylink").html("<button class=\"pb-link\" onclick=\"pb.com.replycancel.call(this, event)\">[Cancel Reply]</button></b>");

            $oS.find("input[name=parentId]").val(iId);
            $oS.find(".textbox").focus(function() {
                isTFocus = true;
            });
            $oS.find(".textbox").blur(function() {
                isTFocus = false;
            });
        }
    }
    , replycancel: function(e) {
        var oS=$(this).parents(".ppcont");
        $(oS).find(".replylink").html("<button class=\"pb-link\" onclick=\"pb.com.reply.call(this, event)\">[Reply]</button></b>");
        $(oS).find(".pform").remove();
    }
    , reviewRating: function(e) {
        var value = $(this).attr('id');
        value = value.substr(4);
        var $widget = $(this).parent();
        var $container = $widget.closest('td');

        for (var i=1; i <= 5; i++) { // clear any existing stars first
            $widget.find('#star'+i).removeClass('filled');
        }
        for (var i=1; i <= value; i++) {
            $widget.find('#star'+i).addClass('filled');
        }
        $widget.attr('rating', value);
        $container.find("#rating").val(value);
    }
    , pCMreview: function(e) {
        if (sendingComment) return;

        var jsmod    = $("#jsmod").val();
        var oS       = $(this).parents(".pform");
        var text     = $(oS).find(".textbox").val();
        var itemId   = $(oS).find("input[name=itemId]").val();
        var parentId = $(oS).find("input[name=parentId]").val();
        var rating   = $(oS).find("#rating").val();
        var activitytype = $("#activitytype").val();
        var send     = true;

        $(this).attr("disabled",true);

        if (rating == 0) { //no rating selected
            $(oS).find('.votemessage').html('<span class="red">You must select a 5-star rating for your review!</span>').fadeIn();
            sendingComment = false;
            send = false;
            $('.submitbutton').attr("disabled",false);
        }
        if (send == true) {
            pb.rmsSend({ mod:'cmt', isReview:true, tar:jsmod, op:'pCM', itemId:itemId, text:text, parentId:parentId, rating:rating, activitytype:activitytype},pb.com.pCMr,pb.com.pCMerror);
        }
    }
    , pCM: function(e) {
        if (sendingComment) return;

        var jsmod    = $("#jsmod").val();
        var $oS      = $(this).parents(".pform");
        var text     = $oS.find(".textbox").val();
        var itemId   = $oS.find("input[name=itemId]").val();
        var parentId = $oS.find("input[name=parentId]").val();
        var activitytype = $("#activitytype").val();

        $(this).attr("disabled",true);
        pb.rmsSend({ mod:'cmt', tar:jsmod, op:'pCM', itemId:itemId, text:text, parentId:parentId, activitytype:activitytype },pb.com.pCMr,pb.com.pCMerror);
    }
    , pCMerror: function (rmsM) {
        sendingComment = false;
        console.error(rmsM);
        if (rmsM.message !== undefined) {
            alert(rmsM.message);
        } else {
            alert(rmsM);
        }
        $('.submitbutton').attr("disabled",false);
    }
    , pCMr: function(oRmsR) {
        sendingComment = false;
        if (oRmsR['rmsD']['pid']==0) {
        // NEW COMMENT
            oS=$("#lastbox");
            var $test1=$('#ppblank').clone(true);
            $test1.find(".replylink").html("<button class=\"pb-link\" onclick=\"pb.com.reply.call(this, event)\">[Reply]</button></b>");
            $test1.attr("id",'pp'+oRmsR['rmsD']['id']);
            $test1.find('#cmblank').attr("id",'cm'+oRmsR['rmsD']['id']);
            $test1.find('div.tPI').attr('id', 'dPI_' + oRmsR['rmsD']['id']);
            $test1.insertBefore($(oS));
            $test1.find(".comtext").html("<span class=\"img_quote\"></span>&nbsp;" + oRmsR['rmsD']['comment']);
            $test1.fadeIn();
            $("#pform0").find(".posterror").html("");
            $("#pform0").find(".textbox").val("");
            $("#pform0").find('.submitbutton').attr("disabled",false);

            //special case for comment reviews
            if ($('.review-form').length > 0) {
                $('.review-form').prev('h3').fadeOut();
                $('.review-form').fadeOut();
            }
        } else {
        // REPLY TO ANOTHER COMMENT
            oS=$("#pp"+oRmsR['rmsD']['pid']);
            $(oS).find(".pform").fadeOut( function(){
                var $test1=$('#cmblank').clone(true);
                $(oS).append($test1);
                $test1.addClass('commentreply2');
                $test1.attr("id",'cm'+oRmsR['rmsD']['id']);
                $test1.find('div.tPI').attr('id', 'dPI_' + oRmsR['rmsD']['id']);
                $test1.find(".comtext").html("<span class=\"img_quote\"></span>&nbsp;" + oRmsR['rmsD']['comment']);
                $test1.fadeIn( function() {
                    pb.com.replycancel.call($(oS).find(".replylink"));
                });
            });
        }
    }
    , hidec: function(oR) {
        var oS=$(oR).parents(".cmcont");
        $(oS).find(".comtext").toggle();
        oS.toggleClass('badcommentvisible');

        window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
        try {
            ga('send', 'event', 'comment', 'hiddencomment', 'toggle', 1 );
        } catch (er) {} 

    }
    , editC: function(e) {
        pb.com.gCM(this);
    }
    , editReview: function(e) { // edit review
        pb.com.gCMreview(this);
    }
    , editCancelReview: function(oR) {
        oR = this;
        var $oS = $(oR).parents(".cmcont");
        $oS.find(".editCM").html("<button class=\"pb-link\" onclick=\"pb.com.gCMreview(this)\">[Edit]</button>");
        $oS.find(".comtext").show();
        $oS.find(".pform").remove();
    }
    , editCancel: function(e) {
        var oR = this;
        var $oS = $(oR).parents(".cmcont");
        $oS.find(".editCM").html("<button class=\"pb-link\" onclick=\"pb.com.gCM(this)\">[Edit]</button>");
        $oS.find(".comtext").show();
        $oS.find(".pform").remove();
    }
    , gCM: function(oR) {
        var jsmod = $("#jsmod").val();
        var $oS   = $(oR).parents(".cmcont");
        var iId   = parseInt($oS.attr('id').substring(2));
        pb.rmsSend({ mod:'cmt', tar:jsmod, op:'gCM', iId:iId },pb.com.gCMr);
    }
    , gCMreview: function(oR) {
        var jsmod=$("#jsmod").val();
        var oS=$(oR).parents(".cmcont");
        var iId=parseInt($(oS).attr('id').substring(2));
        pb.rmsSend({ mod:'cmt', tar:jsmod, op:'gCMreview', iId:iId },pb.com.gCMr);
    }
    , gCMr: function(oRmsR) {
        var iId=oRmsR['rmsD']['id'];
        var $oS=$('#cm'+iId);
        if (!$oS.find(".pform").html() ) {
            var $oC=$('#pform0').clone(true);
            $oC.attr("id",'pform'+iId);
            $oC.show();

            // check if comment is a review, if so populate the rating
            if (typeof oRmsR['rmsD']['parentid'] != 'undefined' && typeof oRmsR['rmsD']['vote_id'] != 'undefined') {
                $oS.find(".pb-star-rating").hide();
                $oS.find(".editCM").html("<button class=\"pb-link\" onclick=\"pb.com.editCancelReview.call(this)\">[Edit Cancel]</button>");
                var widget = $('.star-rating ul', $oC)
                for (var i=1; i <= oRmsR['rmsD']['vote_value']; i++) {
                    $(widget).find('#star'+i).addClass('filled');
                }
                $(widget).attr('rating', oRmsR['rmsD']['vote_value']);
                $(widget).attr('edit', oRmsR['rmsD']['vote_id']);
                $oC.find(".submitbutton").off('click').attr('value','Edit').removeAttr("onclick").click(function(){pb.com.eCMreview.call(this)});
            }
            else {
                $oS.find(".editCM").html("<button class=\"pb-link\" onclick=\"pb.com.editCancel.call(this)\">[Edit Cancel]</button>");
                $oC.find(".hide-for-replies").hide();
                $oC.find(".submitbutton").off('click').attr('value','Edit').removeAttr("onclick").click(function(){pb.com.eCM.call(this)});
            }

            $oS.find(".comtext").parent().append($oC);
            $oS.find(".comtext").hide();
            $oS.find(".textbox").text(oRmsR['rmsD']['comment']);
        }
    }
    , eCM: function(e) {
        var oR    = this;
        var jsmod = $("#jsmod").val();
        var $oS   = $(oR).parents(".cmcont");
        var text  = $oS.find(".textbox").val();
        var iId   = parseInt($oS.attr('id').substring(2));
        pb.rmsSend({ mod:'cmt', tar:jsmod, op:'eCM', iId:iId,text:text },pb.com.eCMr);
    }
    , eCMreview: function() {
        var oR     = this;
        var jsmod  = $("#jsmod").val();
        var $oS    = $(oR).parents(".cmcont");
        var text   = $oS.find(".textbox").val();
        var iId    = parseInt($oS.attr('id').substring(2));
        var rating = $oS.find("#rating").val();
        pb.rmsSend({ mod:'cmt', tar:jsmod, op:'eCM', isReview:true, iId:iId, text:text, rating:rating },pb.com.eCMreviewReturn);
    }
    , eCMreviewReturn: function(oRmsR) {
            var iId=oRmsR['rmsD']['id'];
            var value=oRmsR['rmsD']['rating'];
            var oS=$('#cm'+iId);
            var widget = $(oS).find('.pb-star-rating.readonly,.star-rating.readonly');

            widget.show();
            for (var i=1; i <= 5; i++) { // clear any existing stars first
                $(widget).find('#star'+i).removeClass('filled');
            }
            for (var i=1; i <= value; i++) {
                $(widget).find('#star'+i).addClass('filled');
            }
            $(widget).attr('rating', value);

            $(oS).find(".editCM").html("<button class=\"pb-link\" onclick=\"pb.com.editReview.call(this)\"> [Edit]</button>");
            $(oS).find(".comtext").html("<span class=\"img_quote\"></span>&nbsp;" + oRmsR['rmsD']['comment']);
            $(oS).find(".comtext").show();
            $(oS).find(".pform").remove();
    }
    , eCMr: function(oRmsR) {
            var iId=oRmsR['rmsD']['id'];
            var oS=$('#cm'+iId);
            $(oS).find(".editCM").html("<button class=\"pb-link\" onclick=\"pb.com.editC.call(this)\"> [Edit]</button>");
            $(oS).find(".comtext").html("<span class=\"img_quote\"></span>&nbsp;" + oRmsR['rmsD']['comment']);
            $(oS).find(".comtext").show();
            $(oS).find(".pform").remove();
    }

    , toggleCesspool: function(e) {
        $('#cesspool-comments').toggle();
        $(this).toggleClass('open');
        if ($(this).hasClass('open')) {
            $(this).html('Below threshold threads are visible');
            window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
            try {
                ga('send', 'event', 'comment', 'hiddenthread', 'open', 1 );
            } catch (er) {} 
        }
        else {
            $(this).html('Below threshold threads are hidden');
            window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
            try {
                ga('send', 'event', 'comment', 'hiddenthread', 'close', 1 );
            } catch (er) {} 
        }
    }
    , toggleDeleted: function(e) {
        $('#deleted-comments').toggle();
        $(this).toggleClass('open');
        if ($(this).hasClass('open')) {
            $(this).html('Deleted threads/comments are visible');
        }
        else {
            $(this).html('Deleted threads/comments are hidden');
        }
    }
    , toggleSocialWell: function(e, force) {
        var well = $(this).parents(".cmcont").find('.well-container');
        var oS = $(this).parents(".cmcont");

        if (typeof force == 'undefined') {
            force = !well.filter(':visible').length;
        }

        if (force) {
            pb.com.reply_mobile.call(this, e);
            well.show();
            $(oS).find(".textbox").focus();
        }
        else {
            $('.cmcont .well-container').filter(':visible').slideUp(200);
            // pb.com.replycancel_mobile.call(this, e);
        }
    }
    , pCM_mobile: function(e) {
        var jsmod=$("#jsmod").val();
        $(this).attr("disabled",true);
        var oS=$(this).parents(".pform");
        var text=$(oS).find(".textbox").val();
        var itemId=$(oS).find("input[name=itemId]").val();
        var parentId=$(oS).find("input[name=parentId]").val();

        pb.rmsSend({ mod:'cmt', tar:jsmod, op:'pCM', itemId:itemId, text:text, parentId:parentId },pb.com.pCMr_mobile,pb.com.pCMerror_mobile);
    }
    , pCMerror_mobile: function (rmsM) {
        $('.submitbutton').attr("disabled",false);
    }
    , pCMr_mobile: function(oRmsR) {
        if (oRmsR['rmsD']['pid']==0) {
        // NEW COMMENT
            oS=$("#lastbox");
            var $test1 = $('#ppblank').clone(true);
            $test1.find(".reply-btn").click(pb.com.reply_mobile);
            $test1.attr("id",'pp'+oRmsR['rmsD']['id']);
            $test1.find('#cmblank').attr("id",'cm'+oRmsR['rmsD']['id']);
            $test1.find('div.tPI').attr('id', 'dPI_' + oRmsR['rmsD']['id']);
            $test1.insertBefore($(oS));
            $test1.find(".cmt-text").html(oRmsR['rmsD']['comment']);
            $test1.fadeIn();
            $("#pform0").find(".posterror").html("");
            $("#pform0").find(".textbox").val("");
            $("#pform0").find('.submitbutton').attr("disabled",false);
        } else {
        // REPLY TO ANOTHER COMMENT
            oS=$("#pp"+oRmsR['rmsD']['pid']);
            $(oS).find(".pform").fadeOut( function(){
                var $test1 = $('#cmblank').clone(true).appendTo(oS);
                $test1.addClass('cmt-reply');
                $test1.attr("id",'cm'+oRmsR['rmsD']['id']);
                $test1.find('div.tPI').attr('id', 'dPI_' + oRmsR['rmsD']['id']);
                $test1.find(".cmt-text").html(oRmsR['rmsD']['comment']);
                $test1.fadeIn( function() {
                    pb.com.replycancel_mobile.call($(oS).find('.reply-btn'));
                });
            });
        }
    }
    , reply_mobile: function(e) {
        var oS=$(this).parents(".cmcont");
        var iId=parseInt($(this).parents(".ppcont").attr('id').substring(2));
        if (!$(oS).find(".pform").html() ) {
            var oC=$('#pform0').clone(true);
            $(oC).attr("id",'pform'+iId);
            $(oS).find(".replybox").append($(oC));
            if ($(oS).find(".replyusername").html()) {
                $(oS).find(".textbox").val("@" + $(oS).find(".replyusername").html() + ": ");
            }
            $(oC).find('.commentsubmitbutton')
                .bind('click', pb.com.pCM_mobile);
            $(oS).find(".reply-btn")
                .html("Cancel Reply")
                .unbind('click', pb.com.reply_mobile)
                .bind('click', pb.com.replycancel_mobile);

            $(oS).find("input[name=parentId]").val(iId);
            $(oS).find(".textbox").focus(function() {
                isTFocus = true;
            });
            $(oS).find(".textbox").blur(function() {
                isTFocus = false;
            });
        }
    }
    , replycancel_mobile: function(e) {
        var oS=$(this).parents(".cmcont");
        $(oS).find(".reply-btn")
            .html("Reply")
            .bind('click',pb.com.reply_mobile)
            .unbind('click',pb.com.replycancel_mobile);
        pb.com.toggleSocialWell.call(this, e, false);
        $(oS).find(".pform").remove();
    }

    , toggleCommentsLiteInElement: function(containerSelector, btnSelector, contenttype, contentid) {
            var commentsDiv = pb.firstElement(containerSelector);
            var btn = pb.firstElement(btnSelector);

            // if the comments div has children, we've already loaded in the comments so just close/open it
            if (commentsDiv.childNodes.length) {
                if (pb.hasClass(commentsDiv, 'open')) {
                    closeCommentsLiteDiv(commentsDiv, btn);
                }
                else {
                    openCommentsLiteDiv(commentsDiv, btn);
                }
            }
            else {
                loadCommentsLiteDiv(commentsDiv, btn, contenttype, contentid);
            }
        }
    };

    var MAX_COMMENTS_DIV_HEIGHT = 800;
    var COMMENTS_DIV_SHOW_HEIGHT = 500;

    function closeCommentsLiteDiv(commentsDiv, btn) {
        commentsDiv.style.height = pb.getStyle(commentsDiv, 'height');

        pb.animate(commentsDiv,'height:0', {duration:200}, function() {
            pb.removeClass(btn, 'open');
            pb.removeClass(commentsDiv, 'open');

            var lis = commentsDiv.getElementsByTagName('li');
            var count = lis.length - 1;
            pb.setHTML(btn, count + ' comment' + (count == 1 ? '' : 's') + ' &ndash; Add comment');
        });
    }
    function openCommentsLiteDiv(commentsDiv, btn) {
        pb.addClass(btn, 'open');
        pb.setHTML(btn, 'Hide comments');
        pb.addClass(commentsDiv, 'open');

        commentsDiv.style.height = 'auto';

        var h = parseInt(pb.getStyle(commentsDiv, 'height').replace('px',''));

        if (h > MAX_COMMENTS_DIV_HEIGHT) {
            h = COMMENTS_DIV_SHOW_HEIGHT;
            pb.addClass(commentsDiv, 'scrolling');
            pb.removeClass(commentsDiv, 'not-scrolling');
        }
        else {
            pb.addClass(commentsDiv, 'not-scrolling');
            pb.removeClass(commentsDiv, 'scrolling');
        }

        commentsDiv.style.height = 0;

        commentsDiv.scrollTop = commentsDiv.scrollHeight;
        var ta = pb.firstElement('.comment-textarea', commentsDiv);
        if (ta && !pb.hasClass(ta, 'nl')) {
            ta.focus();
        }

        pb.animate(commentsDiv, 'height:'+h+'px', {
            duration: 200,
            after: function() {
                if (pb.hasClass(commentsDiv, 'not-scrolling')) {
                    // if we aren't scrolling then we need to see the height back to
                    // auto so the div grows to hold added comments
                    commentsDiv.style.height = 'auto';
                }
            },
            easing: function(pos) {
                var commentsDivBottom = pb.getPosition(commentsDiv).y + parseInt(pb.getStyle(commentsDiv, 'height').replace('px','')) + 20;
                if (commentsDivBottom > document.body.scrollTop + window.innerHeight) {
                    document.body.scrollTop = commentsDivBottom - window.innerHeight;
                }
                return (-Math.cos(pos*Math.PI)/2) + 0.5;
            }
        });
    }
    function loadCommentsLiteDiv(commentsDiv, btn, contenttype, contentid) {
        pb.addClass(btn, 'loading');
        pb.addClass(commentsDiv, 'loading');

        var rmsOptions = {
            mod: 'cmt',
            tar: contenttype,
            op: 'gSortComments',
            id: contentid,
            sort: 'time',
            lite: true
        }
        pb.rmsSend(rmsOptions, function(oRmsR) {
            pb.removeClass(btn, 'loading');
            pb.removeClass(commentsDiv, 'loading');

            pb.setHTML(commentsDiv, oRmsR.rmsM);

            // Events
            var ta = pb.firstElement('.comment-textarea', commentsDiv);
            pb.addEvent(ta, 'keydown', taKeyDown);
            pb.makeExpandingTextArea(ta, function() {
                commentsDiv.scrollTop = commentsDiv.scrollHeight;
            });
            pb.addEvent(commentsDiv, 'click', propHandler);

            openCommentsLiteDiv(commentsDiv, btn);
        });

        function propHandler(e) {
            var target = (e.target) ? e.target : e.srcElement;
            var val = 0;
            if (pb.hasClass(target, 'thumbdown')) {
                val = -1;
            }
            else if (pb.hasClass(target, 'thumbup')) {
                val = 1;
            }
            else {
                return;
            }

            var cur = target;
            while (cur && !pb.hasClass(cur, 'comment')) {
                cur = cur.parentNode;
            }

            var commentid = parseInt(cur.id.substr(2));

            var rmsOptions = {
                mod: 'cmt',
                tar: contenttype,
                op: 'pC',
                id: commentid,
                v: val,
                cid: contentid
            }
            pb.rmsSend(rmsOptions,pb.com.pCr);
        }

        function taKeyDown(e) {
            if ( e.keyCode != 13 ) {
                return;
            }

            if (sendingComment) {
                return;
            }

            sendingComment = true;

            this.disabled = true;
            var text = pb.getVal(this);
            this.blur();

            var rmsOptions = {
                mod:'cmt',
                tar:contenttype,
                op:'pCM',
                itemId:contentid,
                text:text,
                parentId:0
            };
            pb.rmsSend(rmsOptions,commentResponse);
        }

        function commentResponse(oRmsR) {
            var rmsOptions = {
                mod: 'cmt',
                tar: contenttype,
                op: 'gGetComment',
                contentid: contentid,
                commentid: oRmsR.rmsD.id,
                lite: true
            };
            pb.rmsSend(rmsOptions,commentLoaded);
        }

        function commentLoaded(oRmsR) {
            sendingComment = false;
            var div = document.createElement('div');
            pb.setHTML(div, oRmsR.rmsM);
            var ul = commentsDiv.getElementsByTagName('ul')[0];
            var li = div.firstElementChild;
            ul.insertBefore(li, ul.lastElementChild);

            li.style.display = 'block';
            var h = parseInt(pb.getStyle(li, 'height').replace('px',''));
            li.style.height = 0;
            pb.animate(li, 'height:'+h+'px', {duration:200});

            var count = 0;
            var interval = setInterval(function() {
                count++;
                if (count > 16) {
                    clearInterval(interval);

                    var ta = pb.firstElement('.comment-textarea', commentsDiv);
                    ta.disabled = false;
                    pb.setVal(ta, '');
                    ta.focus();
                }
                commentsDiv.scrollTop = commentsDiv.scrollHeight;
            },13);
        }
    }
})();
