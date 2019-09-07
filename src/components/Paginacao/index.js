import React, { Component, Fragment } from 'react';
import Pagination from 'react-bootstrap/Pagination'

class Paginacao extends Component {


    

    render() {
        return (
            <Fragment>
                <Pagination>
                    <Pagination.First onClick={() => this.props.sum(2)}/>
                    <Pagination.Prev onClick={() => this.props.sum(4)}/>

                    {(this.props.min && <Pagination.Ellipsis />)}

                    {(this.props.cont.map((item, key) => {
                        return (
                            <Fragment>
                                {(item === this.props.selPag && <Pagination.Item active onClick={() => this.props.onClick(item)}>{item}</Pagination.Item>)
                                    || <Pagination.Item onClick={() => this.props.onClick(item)}>{item}</Pagination.Item>}
                             </Fragment>
                        );
                    }))}
                    {(this.props.max && <Pagination.Ellipsis />)}

                    <Pagination.Next onClick={() => this.props.sum(3)}/>
                    <Pagination.Last onClick={() => this.props.sum(1)}/>
                </Pagination>
            </Fragment>
        );
    }
}

export default Paginacao;