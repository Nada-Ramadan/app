import React,{ Component } from "react";
import Product from "./Product";
import Swal from 'sweetalert2'

export default class Home extends Component {
    state = {
        products :[{
            count    :1,
            id       :1,
            onSale   : false,
            name     : "samsung",
            price    :  5000,
            category : "mobile",
            desc     : "good"
        },
        {
            count    :1,
            id       :2,
            onSale   : true,
            name     : "oppo",
            price    :  10000,
            category : "mobile",
            desc     : "bad"
        },
        {
            count    :1,
            id       :3,
            onSale   : true,
            name     : "samsung",
            price    :  50000,
            category : "TV",
            desc     : "good"
        },
        {
            count    :1,
            id       :4,
            onSale   : false,
            name     : "iphone",
            price    :  60000,
            category : "mobile",
            desc     : "v.good"
        },
        {
            count    :1,
            id       :5,
            onSale   : false,
            name     : "iphone",
            price    :  60000,
            category : "mobile",
            desc     : "v.good"
        },
        {
            count    :1,
            id       :6,
            onSale   : true,
            name     : "iphone",
            price    :  60000,
            category : "mobile",
            desc     : "v.good"
        },
        {
            count    :1,
            id       :7,
            onSale   : false,
            name     : "iphone",
            price    :  60000,
            category : "mobile",
            desc     : "v.good"
        },
        {
            count    :1,
            id       :8,
            onSale   : true,
            name     : "iphone",
            price    :  60000,
            category : "mobile",
            desc     : "v.good"
        }
    ]
    }
    updateProduct =(index,count) => {
        if (count == 0) {
            
            this.deleteProduct(this.state.products[index])
            return;
        }
        let hardCopyProduct = {...this.state.products}
        hardCopyProduct[index].count = count
        this.setState({hardCopyProduct})

    }
    deleteProduct = (index)=> {

        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: "btn btn-success mx-2",
              cancelButton: "btn btn-danger mx-2"
            },
            buttonsStyling: false
          });
          swalWithBootstrapButtons.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
                let copyOfProducts = [...this.state.products]
                copyOfProducts.splice(index, 1)
                this.setState({products : copyOfProducts})
              swalWithBootstrapButtons.fire({
                title: "Deleted!",
                text: "Your product has been deleted.",
                icon: "success"
              });
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire({
                title: "Cancelled",
                text: "Your imaginary file is safe :)",
                icon: "error"
              });
            }
          });
    }
    render(){
        return( 
            <div className='container my-5'>
                <div className='row g-3'>
                {this.state.products.map((product,i)=>{
                    return <div key={i} className="col-md-3 text-center">
                    <Product index = {i} updateProduct = {this.updateProduct} deleteProduct = {this.deleteProduct} product ={product} />
                    </div>
                })}
                </div>  
            </div>
        )
    }
}