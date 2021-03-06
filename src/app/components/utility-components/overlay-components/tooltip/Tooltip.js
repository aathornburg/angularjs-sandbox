export class Tooltip {
    /* @ngInject */
    constructor(tooltipService) {
        this.showTooltip = false;
        this.tooltipId = tooltipService.generateTooltipId();
    }

    open() {
        this.showTooltip = true;
    }

    close() {
        this.showTooltip = false;
    }

    toggle() {
        this.showTooltip = !this.showTooltip;
    }
}