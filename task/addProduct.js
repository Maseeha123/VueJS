new Vue({
    el: "#productDetails",
    data: {
        saveProducts: { productName: "", rate: "", avalibleQuantity: "" },
        product: [],
        productList: [],
        selectedIndex: "",
        selectedProduct: "",
        amount: 0,
        showTable: true,
        tabledata: [{}],
        productArray: [],
        total: "",
        tableShow: false,
    },
    methods: {
        save: function () {
            this.product = JSON.parse(localStorage.getItem("product"))
            this.product.push(this.saveProducts)
            localStorage.setItem("product", JSON.stringify(this.product))
            location.href = 'viewproductdetails.html';
        },

        backtoProductPage: function () {
            location.href = 'addProducts.html';
        },
        deleteRow: function (index) {

            if (confirm('Are you sure to delete this record ?')) {
                this.productList.splice(index, 1);
                localStorage.setItem("product", JSON.stringify(this.productList))
                this.getRecords();
            }
        },
        EditRow: function (i, index) {
            this.selectedIndex = index
            this.saveProducts.productName = i.productName;
            this.saveProducts.rate = i.rate;
            this.saveProducts.avalibleQuantity = i.avalibleQuantity;
            document.getElementById("div").style.display = 'block';
            this.showTable = false;

        },
        getRecords: function () {
            this.productList = JSON.parse(localStorage.getItem("product"))
        },
        updateProducts: function () {
            this.product = JSON.parse(localStorage.getItem("product"))
            this.product.splice(this.selectedIndex, 1, this.saveProducts);
            localStorage.setItem("product", JSON.stringify(this.product));
            alert("Details Updated...")
            document.getElementById("div").style.display = 'none';
            this.showTable = true;
            this.getRecords();
        },
        calling() {

            let total = 0;
            this.tableShow = true
            this.productArray.push({ productName: this.selectedProduct, quantity: this.saveProducts.avalibleQuantity, rate: this.saveProducts.rate, amount: this.amount })

            console.log(this.productArray);
            
            this.productArray.forEach(x => {
                console.log(x.productName);
                this.selectedProduct = x.productName;
                this.saveProducts.avalibleQuantity = x.quantity;
                this.saveProducts.rate = x.rate;
                total += parseInt(x.amount)
                console.log(total);
                this.total = total
                this.amount = x.amount;
            });
            console.log(this.productArray.productName);

        },
        displayRate: function () {
            let obj = this.productList.find(x => this.selectedProduct == x.productName);
            this.saveProducts.rate = obj.rate;
            this.saveProducts.avalibleQuantity = "";
            this.amount = "";
        },

        totalAmount: function () {
            let obj = this.productList.find(x => this.selectedProduct == x.productName);
            this.amount = parseInt(this.saveProducts.avalibleQuantity) * parseInt(this.saveProducts.rate)

            if (parseInt(this.saveProducts.avalibleQuantity) > parseInt(obj.avalibleQuantity)) {
                this.amount = 0;
            }
        }
    },
    watch: {
        selectedProduct: function (value) {
            if (value != 'undefined') {
                let obj = this.productList.find(x => value == x.productName);
                this.saveProducts.rate = obj.rate;
                this.saveProducts.avalibleQuantity = "";
                this.amount = "";
            }
        },
        'saveProducts.avalibleQuantity': function (value) {
            if (value != 'undefined') {
                let obj = this.productList.find(x => this.selectedProduct == x.productName);
                if (parseInt(value) >= parseInt(obj.avalibleQuantity)) {
                    alert("Stock Unavalible")
                    this.saveProducts.avalibleQuantity = "";

                }
            }
        }
    }
    ,

    mounted() {
        this.getRecords();
    },

})
