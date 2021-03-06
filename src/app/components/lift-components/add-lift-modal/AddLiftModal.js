export class AddLiftModal {
    /* @ngInject */
    constructor(liftsService) {
        this.$liftsService = liftsService;
    }

    submitForm() {
        console.log(this.addLiftForm);
        if (this.addLiftForm.$valid) {
            this.$liftsService.storeLift(
                this.addLiftForm.lift,
                this.addLiftForm.weight,
                this.addLiftForm.sets,
                this.addLiftForm.minReps,
                this.addLiftForm.maxReps
            );
        }
    }
}