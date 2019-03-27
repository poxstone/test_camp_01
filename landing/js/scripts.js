'use strict';
(function(){
    // vue js
    window.APP = new Vue({
        el: '#app',
        data: {
            validateStatus: true,
            isSending: false,
            name: '',
            lastName:'',
            idNumber: '',
            email: '',
            phone: '',
            carModel: '',
            city: '',
            concessionaire: ''
        },
        methods: {
            send: function(event) {ValidateAndSend(event)}
        },
        watch: {
            validateStatus: function(oldVal, newVal) {
                this.isSending = newVal ? true : false;
            }
        }
    })

    // INPUT LOAD FUNCTION
    function ValidateAndSend(event) {
        APP.$data.validateStatus = 'validating';
    };

    function clearData() {
        APP.$data.validateStatus = false;
        APP.$data.isSending = false;
    }

})();