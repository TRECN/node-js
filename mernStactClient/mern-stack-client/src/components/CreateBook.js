import React, { Component } from 'react'

export default class CreateBook extends Component {

    constructor(){
        super();
        this.state={
            title: '',
            isbn:'',
            author:'',
            description:'',
            published_date:'',
            publisher:''
        };

        onChange =e=>{
            this.state({[e.target.name]:e.target.value})
        }

        onSubmit=e=>{
            e.preventDefault();

            const date={
                title: this.state.title,
                isbn: this.state.isbn,
                author: this.state.author,
                description: this.state.description,
                published_date

            }
        }
    }


  render() {
    return (
      <div>CreateBook</div>
    )
  }
}
