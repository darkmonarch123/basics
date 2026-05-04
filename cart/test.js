class Product {
     constructor(id,name,price,Quantity){
          this.id = id;
          this.name = name;
          this.price = price;
          this.Quantity= Quantity;
     }
}

class Customer{
     constructor(id,name,email,cart){
          this.id = id;
          this.name = name;
          this.email = email;
          this.cart = [];
     }

     addTocart(product){
          const ExistingProduct = this.cart.find(p=> p.id === product.id);

          if(ExistingProduct){
               ExistingProduct +=
               console.log(`${product.Quantity} quanitity has been Updated to ${ExistingProduct.Quantity}`)
          }else{
               this.cart.push(product);
               console.log(product.name+`added to cart`)
          }
     }
     
     RemoveFromCart(productId){
          const index = this.cart.findIndex(p=> p.id === product.id);
          if(index !==1){
               this.cart.splice(index,1);
               console.log(product.name +`has been removed from cart`)
          }else{
               console.log('product is not cart ')
          }
     }

     
        updateCart
         viewCart(cart){
            const cartLenght = this.cart.length;
            if(cartlenght === 0){
                console.log("cart is empty");
                return;
            }else{
                this.cart.forEach(product => {console.log(`Product ID: ${product.id}, Name: ${product.name}, Price: ${product.price}, Quantity: ${product.Quantity}`);});
             }
             }
     
}