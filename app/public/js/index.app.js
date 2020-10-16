var app = new Vue({
  el: '#comments',
  data: {
    commentList: [],
    newCommentForm: {}
  },
  methods: {
    newCommentData() {
      return {
        id: "",
        commentText: ""
      }
    },
    handleNewCommentForm( evt ) {
      console.log("Comment form submitted");
      fetch('api/comments/create.php', {
        method:'POST',
        body: JSON.stringify(this.newCommentForm),
        headers: {
          "Content-Type": "application/json; charset=utf-8"}
      })
      .then( response => response.json() )
      .then( json => {
        console.log("Returned from post:", json);
        // TODO: test a result was returned!
        this.commentList = json;
        this.newCommentForm = this.newCommentData();
      });
    }
},
created(){
    fetch("api/comments/")
    .then(response => response.json() )
    .then(json => {
      this.commentList=json;

      console.log(json)}
    );
  this.newCommentForm = this.newCommentData();
}
})
