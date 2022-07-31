import axios from 'axios';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';

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
    }};


        onChange =e=>{
            this.state({[e.target.name]:e.target.value})
        }

        onSubmit=e=>{
            e.preventDefault();

            const data={
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
                    this.props.history.push('/')
                })
                .catch(er=>{
                    console.log('error in create book');
                })

        }


  render() {
    return (
      <div className="CreateBook">
          <div className="container">
              <div className="row">
                  <div className="col-md-8 m-auto">
                      <br />
                      <Link to='/' className='btn btn-outline-warning float-left'>
                        Show book list
                      </Link>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}
