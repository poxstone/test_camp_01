'use strict';
(function(){
    // vue js
    window.APP = new Vue({
        el: '#app',
        data: {
            validateStatus: '',
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
                this.isSending = newVal != '' ? false : true;
            }
        }
    })

    // INPUT LOAD FUNCTION
    function ValidateAndSend(event) {
        event.preventDefault();
        APP.$data.validateStatus = 'validating';
        var data_json = JSON.stringify(APP.$data);
        var formObj = event.target;
        console.log('data to send:', data_json);
        clearData();
        
        setTimeout((x)=>{
            console.log(APP.$data);
            alert('Tu información ha sido enviada!' + data_json);
            APP.$data.validateStatus = '';
        }, 2000)
    };

    function clearData() {
        //APP.$data.validateStatus = '';
        //APP.$data.isSending = false;
        APP.$data.name = '';
        APP.$data.lastName = '';
        APP.$data.idNumber = '';
        APP.$data.email = '';
        APP.$data.phone = '';
        APP.$data.carModel = '';
        APP.$data.city = '';
        APP.$data.concessionaire = '';
    }

})();