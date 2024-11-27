const data = [
    { id: 1, name: "Laptop", price: 800, category: "Electronics", status: "delivered" },
    { id: 2, name: "Book", price: 20, category: "Stationery", status: "pending" },
    { id: 3, name: "Phone", price: 600, category: "Electronics", status: "delivered" },
    { id: 4, name: "Pen", price: 2, category: "Stationery", status: "pending" },
    { id: 5, name: "Tablet", price: 300, category: "Electronics", status: "delivered" }
  ];
  
  // console.log(data.filter(product => product.category === 'Electronics'));
   function items(data){
    const elec = data.filter(product => product.category === 'Electronics');
    const toupper = elec.map(product => product.name. toUpperCase());
    const totalprc = elec.reduce((total, curr) => total + curr.price ,0);
    const costlyprod = elec.filter(product => product.price > 500);
    const sorted = elec.sort((a, b) => b.price - a.price);
    const statustype = data.some(product => product.status === 'pending');
    return {
      toupper,
      totalprc,
      costlyprod,
      sorted,
      statustype
    };
   }
   const result = items(data);
   console.log(result);
   