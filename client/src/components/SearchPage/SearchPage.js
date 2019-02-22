import React from 'react';
import './SearchPage.css';
import Book from '../Book/Book'
import axios from 'axios';



class SearchPage extends React.Component {
    state = {}
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        }, function () {
            console.log(this.state)
        })
    }
    handleSubmit = () => {
        console.log(this.state.book)
        const key = 'AIzaSyB1W_QJ9wEHm_LCUh8gUdlvSh18nwKvFLY';
        const query = 'https://www.googleapis.com/books/v1/volumes?q=' + this.state.book + '&key=' + key;

        axios.get(query).then(result =>{
            console.log(result);
            this.setState({
                books: result.data.items
            })
        })

    }
    handleSave = (info) => {
        console.log(info, "This should be our book info");
    }
    render() {
        return (
            <div>
                <div className="jumbo"> Google books</div>

                    <div>
                        <input name="book" onChange={this.handleChange} placeholder="Enter book" />
                        <button onClick={this.handleSubmit}>submit</button>
                    </div>

                 <div>
                     {this.state.books ? 
                     this.state.books.map(e => { 
                         return <Book handleSave={this.handleSave} info={e.volumeInfo}/>
                     })
                     :
                     ""
                     }
                 </div>

                </div>
            
        )
    }

}




export default SearchPage;