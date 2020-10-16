  var ru = new Vue({
        el: '#app',
        data: {
          avatar:'',
          name:'',
          email:'',
          city:'',
          state:'',
          country:'',
          birthdate:'',
          userage:'',
        },

        computed: {
          age() {
            return moment().diff(this.birthdate, 'years');
          }
        },
        methods: {
          formatDate(d) {
            return moment(d).format("MMMM Do YYYY");
          },
            
            refresh() {
            axios.get('https://randomuser.me/api/')
                .then(function (response) {
                    const user = response.data.results[0];
                    ru.avatar = user.picture.large;
                    ru.name = user.name.first + " " + user.name.last;
                    ru.email = user.email;
                    ru.city = user.location.city;
                    ru.state = user.location.state;
                    ru.country = user.location.country;
                    ru.birthdate = user.dob.date;
                    ru.userage = user.dob.age;
                })
        }
            
        },
        created() {},

        mounted() {
            axios.get('https://randomuser.me/api/')
                .then(function (response) {
                    const user = response.data.results[0];
                    ru.avatar = user.picture.large;
                    ru.name = user.name.first + " " + user.name.last;
                    ru.email = user.email;
                    ru.city = user.location.city;
                    ru.state = user.location.state;
                    ru.country = user.location.country;
                    ru.birthdate = user.dob.date;
                    ru.userage = user.dob.age;
                })
        }
    });
