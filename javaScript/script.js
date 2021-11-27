const app = new Vue (
    {
        el:'#root',
        data: {
            images: [
                {
                    image:'img/01.jpg',
                    titolo: 'Svezia',
                    testo: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
                },
                {
                    image:'img/02.jpg',
                    titolo: 'Svizzera',
                    testo: 'Lorem ipsum'
                },
                {
                    image:'img/03.jpg',
                    titolo: 'Gran Bretagna',
                    testo: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
                },
                {
                    image:'img/04.jpg',
                    titolo: 'Germania',
                    testo: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,'
                },
                {
                    image:'img/05.jpg',
                    titolo: 'Paradise',
                    testo: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,'
                },
            ],
            currentImg: 0,
        },
        methods: {
            nextImg: function() {
                if (this.currentImg == this.images.length-1) {
                    this.currentImg = 0;
                }
                else{
                    this.currentImg++;
                }

            },
            prevImg: function() {
                if (this.currentImg == 0) {
                    this.currentImg = this.images.length-1;
                }
                else{
                    this.currentImg--;
                }
            },
        }


    }
)