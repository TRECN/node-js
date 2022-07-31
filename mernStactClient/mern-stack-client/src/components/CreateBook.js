import axios from 'axios';
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
                published_date:this.state.published_date,
                publisher:this.state.publisher

            }

            axios
                .post('http://localhost:8082/api/books',data)
                .then(res=>{
                    this.state({
                        title: '',
                        isbn:'',
                        author:'',
                        description:'',
                        published_date:'',
                        publisher:''
                    })
                })

        }


    }


  render() {
    return (
      <div>CreateBook</div>
    )
  }
}
