<template>
  <div class="container">
   
    <div class="ques-con">
      <p class="question">{{quiz[cnt].Question}}</p>
      <p class="options">
        <label>
          <input
            name="answere"
            id="1"
            @change="callUpdate"
            type="radio"
            :checked="Mapper.get(cnt) == 1"
          >
          <span>{{quiz[cnt].option1}}</span>
        </label>
      </p>
      <p class="options">
        <label>
          <input
            name="answere"
            id="2"
            @change="callUpdate"
            type="radio"
            :checked="Mapper.get(cnt) == 2"
          >
          <span>{{quiz[cnt].option2}}</span>
        </label>
      </p>
      <p class="options">
        <label>
          <input
            name="answere"
            id="3"
            type="radio"
            @change="callUpdate"
            :checked="Mapper.get(cnt) == 3"
          >
          <span>{{quiz[cnt].option3}}</span>
        </label>
      </p>
      <p class="options">
        <label>
          <input
            name="answere"
            id="4"
            type="radio"
            @change="callUpdate"
            :checked="Mapper.get(cnt) == 4"
          >
          <span>{{quiz[cnt].option4}}</span>
        </label>
      </p>
      <div class="controls">
        <a
          :class="{'btn disabled': cnt <= 0, 'waves-effect waves-light btn': cnt > 0}"
          @click="goToPrev"
        >Previous</a>
        <a
          :class="{'btn disabled': cnt > quiz.length-2, 'waves-effect waves-light btn': cnt >= 0 }"
          @click="goToNext"
        >Next</a>
        <a id="finish" class="waves-effect waves-light btn" @click="submit">Finish</a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import router from "vue-router";

import { constants } from "fs";
export default {
  name: "TestSection",
  data() {
    return {
      quiz: [],
      ActiveQuestion: "",
      Mapper: new Map(),
      selectedOption: 0,
      updated: false,
      cnt: 0
    };
  },
  methods: {
    callUpdate(e) {
      this.selectedOption = e.target.id;
      this.updated = true;
    },
    goToNext() {
      console.log(this.cnt + " " + this.quiz.length);
      var id = this.cnt++;
      //get the selected option
      //update the mapper
      if (this.updated) this.Mapper.set(id, this.selectedOption);
      console.log(this.Mapper.get(this.cnt - 1));
      this.updated = false;
    },
    goToPrev(e) {
      var id = this.cnt--;
      if (this.updated) this.Mapper.set(id, this.selectedOption);
      console.log(this.Mapper);
      this.updated = false;
    },
    submit() {
      var id = this.cnt + 1;
      if (this.updated) this.Mapper.set(id - 1, this.selectedOption);
      console.log(this.Mapper);
      this.updated = false;
      console.log(this.Mapper);

      axios
        .post("http://lsapp.test/api/quiz", { answeres: this.Mapper })
        .then(
          res =>
            this.$router.push({ name: "Result", params: { score: res.data } }) // -> /user/123
        )
        .catch(err => console.log(err));
    }
  },
  created() {
    axios
      .get("http://lsapp.test/api/quiz")
      .then(res => (this.quiz = res.data.data))
      .catch(err => console.log(err));
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  margin-top: 5em;
}
.time{
    text-align: right;
}
.question {
  text-align: left;
  padding: 1em;
  font-size: 20px;
}
.ques-con {
  padding: 2em;
  margin: 1em;
}
.options {
  text-align: left;
  margin-left: 2em;
}
.controls {
  display: inline;
  text-align: right;
}
a {
  border-radius: 10px;
  margin: 1em;
  margin-top: 2em;
  width: 120px;
}
#finish {
  margin-left: 26em;
}
</style>
