var adsManager;
var adsLoader;
var adDisplayContainer;
//var intervalTimer;
var videoContent;

var adTag;

function setUpIMA() {
    // Create the ad display container.
    createAdDisplayContainer();
    // Create ads loader.
    adsLoader = new google.ima.AdsLoader(adDisplayContainer);
    // Listen and respond to ads loaded and error events.
    adsLoader.addEventListener(
        google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,
        onAdsManagerLoaded,
        false);
    adsLoader.addEventListener(
        google.ima.AdErrorEvent.Type.AD_ERROR,
        onAdError,
        false);

    // Request video ads.
    var adsRequest = new google.ima.AdsRequest();
    adsRequest.adTagUrl = adTag;

    // Specify the linear and nonlinear slot sizes. This helps the SDK to
    // select the correct creative if multiple are returned.
    adsRequest.linearAdSlotWidth = videoContent.offsetWidth;
    adsRequest.linearAdSlotHeight = videoContent.offsetHeight;
        
    adsRequest.nonLinearAdSlotWidth = videoContent.offsetWidth;
    adsRequest.nonLinearAdSlotHeight = 150;

    adsLoader.requestAds(adsRequest);
}

function createAdDisplayContainer() {
    // We assume the adContainer is the DOM id of the element that will house
    // the ads.
    adDisplayContainer = new google.ima.AdDisplayContainer(videoContent);
}

function requestAds(element, adTag) {
    this.videoContent = element;
    this.adTag = adTag;
    if (adTag && typeof google != 'undefined') {
        try {
            setUpIMA();
            adDisplayContainer.initialize();
        } catch(err) {
            console.log('video error: '+err);
            onContentResumeRequested();
        }
    } else {
        onContentResumeRequested();
    }
}

function onAdsManagerLoaded(adsManagerLoadedEvent) {
    // Get the ads manager.
    var adsRenderingSettings = new google.ima.AdsRenderingSettings();
    adsRenderingSettings.restoreCustomPlaybackStateOnAdBreakComplete = true;
    // videoContent should be set to the content video element.
    adsManager = adsManagerLoadedEvent.getAdsManager(videoContent, adsRenderingSettings);

    // Add listeners to the required events.
    adsManager.addEventListener(
        google.ima.AdErrorEvent.Type.AD_ERROR,
        onAdError);
    adsManager.addEventListener(
        google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED,
        onContentPauseRequested);
    adsManager.addEventListener(
        google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED,
        onContentResumeRequested);
    adsManager.addEventListener(
        google.ima.AdEvent.Type.ALL_ADS_COMPLETED,
        onAdEvent);
    
    // Listen to any additional events, if necessary.
    adsManager.addEventListener(
      google.ima.AdEvent.Type.LOADED,
      onAdEvent);
    adsManager.addEventListener(
        google.ima.AdEvent.Type.STARTED,
        onAdEvent);
    adsManager.addEventListener(
        google.ima.AdEvent.Type.COMPLETE,
        onAdEvent);
      
    try {
        // Initialize the ads manager. Ad rules playlist will start at this time.
        adsManager.init(videoContent.offsetWidth, videoContent.offsetHeight, google.ima.ViewMode.NORMAL);
        // Call play to start showing the ad. Single video and overlay ads will
        // start at this time; the call will be ignored for ad rules.
        adsManager.start();
    } catch (adError) {
        // An error may be thrown if there was a problem with the VAST response.
        //    videoContent.play();
    }
}

function onAdEvent(adEvent) {
    // Retrieve the ad from the event. Some events (e.g. ALL_ADS_COMPLETED)
    // don't have ad object associated.
    var ad = adEvent.getAd();
    switch (adEvent.type) {
        case google.ima.AdEvent.Type.LOADED:
            // This is the first event sent for an ad - it is possible to
            // determine whether the ad is a video ad or an overlay.
            if (!ad.isLinear()) {
            // Position AdDisplayContainer correctly for overlay.
            // Use ad.width and ad.height.
            //     videoContent.play();
            }
        break;
        case google.ima.AdEvent.Type.STARTED:
            // This event indicates the ad has started - the video player
            // can adjust the UI, for example display a pause button and
            // remaining time.
            if (ad.isLinear()) {
            // For a linear ad, a timer can be started to poll for
            // the remaining time.
            /*
            intervalTimer = setInterval(
                function() {
                  var remainingTime = adsManager.getRemainingTime();
                },
                300); // every 300ms
            */
            }
        break;
        case google.ima.AdEvent.Type.COMPLETE:
            // This event indicates the ad has finished - the video player
            // can perform appropriate UI actions, such as removing the timer for
            // remaining time detection.
            /*
            if (ad.isLinear()) {
              clearInterval(intervalTimer);
            }
            */
        break;
    }
}

function onAdError(adErrorEvent) {
    // Handle the error logging.
  //  console.log(adErrorEvent.getError());
    if (typeof(adsManager) != "undefined") {
        adsManager.destroy();
    }
    
    onContentResumeRequested();
}

function onContentPauseRequested() {
}

function onContentResumeRequested() {
    var $iframe = $(videoContent).parent().find("iframe");
    $iframe.attr("src", $iframe.attr("src") + "?autoplay=1");
    $(videoContent).remove();
}