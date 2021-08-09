import React, { Component } from 'react'
import './style.css'

// 每一个详细商品的组件
class OrderItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            editing: true,
            stars: 0,
            comment: ""
        }
    }

   
    render() {

        // 从父组件也就是OrderList中解构出来的
        const { shop, product, price, picture, ifCommented } = this.props.data;
        
        return (
            <div className="orderItem">
                <div className="orderItem__picContainer">
                    <img className="orderItem__pic" src={picture}/>
                </div>
                <div className="orderItem__content">
                    <div className="orderItem__product">{product}</div>
                    <div className="orderItem__shop">{shop}</div>
                    <div className="orderItem__detail">
                        <div className="orderItem__price">{price}</div>
                        <div>
                            {
                                ifCommented ? (
                                    <button className="orderItem__btn orderItem__btn--grey">已评价</button>
                                ) : (
                                    <button className="orderItem__btn orderItem__btn--red" onClick={this.handleOpenEditArea()}>评价</button>
                                )
                            }
                        </div>
                    </div>
                </div>
                {this.state.editing ? this.renderEditArea() : null}
            </div>
        );
    }

    handleOpenEditArea = () => {
        this.setState({
            editing: true
        })
    }

    handleCommentChange = (e) => {
        this.setState({
            comment: e.target.value
        })
    }

    renderStars(){
        const { stars } = this.state;
        return (
            <div>
                {
                    [1,2,3,4,5].map((item,index) => {
                        const light = stars >= item ?
                        "orderItem__star--light" : "";
                        return (
                          <span key={index} onClick={this.handleClickStars.bind(this, item)}>★</span>
                        )
                    })
                }

            </div>
        )
    }

    handleClickStars = (stars) => {
            this.setState({
                stars: stars
            })
    }

    renderEditArea(){
        return (

            <div className="orderItem__commentContainer">
                  <textarea 
                    onChange={this.handleCommentChange} 
                    className="orderItem__comment"
                    value={this.state.comment}
                  />
                  {this.renderStars()}
                  <button 
                    className='orderItem__btn orderItem__btn--grey'
                    onClick={this.handleSubmitComment()}
                  >
                      提交
                  </button>  
                  <button 
                    className="orderItem__btn orderItem__btn--red" 
                    ocClick={this.handleCancelComment}
                  >
                      取消
                  </button>  
            </div>
       
        )
    }

    handleSubmitComment = () => {
        const {id} = this.props.data;
        const {comment, stars} = this.state;
        this.setState({
            editing: false
        })
        this.props.onSubmit( id, comment, stars )
    }

    handleCancelComment(){
        this.setState({
            editing: false,
            comment: "",
            stars: 0
        })
    }

}

export default OrderItem