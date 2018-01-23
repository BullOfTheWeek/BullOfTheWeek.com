import React from 'react'
import 'typeface-oswald'


class Blog extends React.Component {
    render() {
        return (
            <div style={{}}>
                <h1 style={{fontFamily:"Oswald"}}> Blog </h1>
                <div style={{marginLeft:'2rem'}}>
                    <p>blog1</p>
                    <p>blog2</p>
                    <p>blog3</p>
                </div>
            </div>
        )
    }
}
export default Blog