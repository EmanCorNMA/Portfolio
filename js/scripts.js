document.addEventListener('DOMContentLoaded', function () {

    //JAVASCRIPT FUNCTIONS GO HERE

    function refreshSwitch(s) {
        let currentSwitch = s.dataset.switchCurrent;

        let switchAttrStr = "switchSrc-" + currentSwitch;
        let currentSwitchSrc = s.dataset[switchAttrStr];

        s.setAttribute("src", currentSwitchSrc);
    }

    function switchNext(s) {
        let currentSwitch = parseInt(s.dataset.switchCurrent, 10);
        let switchCases = parseInt(s.dataset.switchCases, 10);

        currentSwitch += 1;
        if (currentSwitch >= switchCases) {
            currentSwitch = 0;
        }

        s.dataset.switchCurrent = currentSwitch;
    }

    function initializeSwitch() {
        let switchables = document.getElementsByClassName("switchable");
        for (let i = 0; i < switchables.length; i += 1) {
            let switchable = switchables[i];
            refreshSwitch(switchable);
            switchable.addEventListener("click", () => {
                switchNext(switchable);
                refreshSwitch(switchable);
            });
        }
    }
    initializeSwitch();

    //TEST IF JS IS LINKED AND ACTIVE console.log('JS IS READY');
})