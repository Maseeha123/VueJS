new Vue({
    el: "#productDetails",
    data: {
        saveProducts: { productName: "", rate: "", avalibleQuantity: "" },
        product: [],
        productList: [],
        selectedIndex: ""
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
                this.getRecords()

            }
        },
        EditRow: function (i, index) {
            this.selectedIndex = index
            this.saveProducts.productName = i.productName;
            this.saveProducts.rate = i.rate;
            this.saveProducts.avalibleQuantity = i.avalibleQuantity;
            document.getElementById("div").style.display = 'block';
            document.getElementById("table").style.display = 'none';

        },
        getRecords: function () {
            this.productList = JSON.parse(localStorage.getItem("product"))
        },
        updateProducts: function () {
            this.product  = JSON.parse(localStorage.getItem("product"))
            this.product.splice(this.selectedIndex, 1, this.saveProducts);
            localStorage.setItem("product", JSON.stringify(this.product));
            alert("Details Updated...")
            document.getElementById("div").style.display = 'none';
            document.getElementById("table").style.display = 'inline-table';
            this.getRecords();

        }

    },
    mounted() {
        this.getRecords();
    },

})
