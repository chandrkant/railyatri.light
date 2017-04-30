import BaseModalController from 'railyatri/controllers/modals/base-modal';

export default BaseModalController.extend({
  applicant_data : null,
  actions: {
    confirm: function() {
      return this.send('closeModal');
    }
  }
});

