import React, { Component } from 'react'
import axios from "axios";
import MyModal from "./MyModal"
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts:[],
             selectedData:[],
             showModal:false
        }
    }
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(res=>{ 
            console.log(res.data)
           
            this.setState({posts: res.data})
        })
        .catch(error=>{
            console.log(error)
        })
    }
    rowClick = id =>{
      const {posts}=this.state
      const filteredData=posts.filter(_data=>_data.id===id)
      this.setState({
        selectedData:filteredData,
        showModal:true
      })
    }

  toggleModal=()=>{
    this.setState(prevState=>({
      showModal:!prevState.showModal
    }))
  }


    render() {
        const { posts }= this.state
        const allPosts = posts.map(post => {
            return(
                <tr 
                key={post.id}
                onClick={()=>this.rowClick(post.id)}
                >
                    <td>{post.id}</td>
                    <td>{post.userId}</td>
                    <td>{post.title}</td>
                    <td>{post.body}</td>
                </tr>
            )
            })
        return (
            <div>
              <MyModal 
                showModal={this.state.showModal} 
                selectedDataObject={this.state.selectedData}
                toggleModal={this.toggleModal}
              />
            <table className="table table-bordered table-hover ">
                <thead className="table-dark">
                    <tr >
                        <td>#</td>
                        <td>ID</td>
                        <td>Title</td>
                        <td>Body</td>
                    </tr>
                </thead>
                <tbody >
                    {allPosts}
                </tbody>
            </table>
            </div>
        )
    }
}
