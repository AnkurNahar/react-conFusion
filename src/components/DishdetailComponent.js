import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, List } from 'reactstrap';



function RenderDish({dish}) {
    console.log(dish);
        if (dish !== undefined)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }

    function RenderComments({dish}) {
        if (dish !== undefined){
            return(
                <div>
                    <h1>Comments</h1>
                    <List type="unstyled">
                        {dish.comments.map((comment) => {
                            return(
                                <div>
                                    <li>{comment.comment}</li>
                                    <br></br>
                                    <li>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</li>
                                    <br></br>
                                </div>  
                            )  
                        })
                        }
                    </List>
                </div>
            );
        }
            
        else {
            return(
                <div></div>
            );
        }
            
    }

    const  DishDetail = (props) => {

        return (
            <div className="container">
                <div className="row">
                    <div  className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish}/>
                    </div>
                
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments dish = {props.dish}/>
                    </div>
                </div>
            </div>
            
        );
    }


export default DishDetail;