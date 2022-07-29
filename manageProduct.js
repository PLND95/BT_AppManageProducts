let productList = ["Iphone 11", "Iphone X", "Iphone 8" , "Iphone XS" , "Iphone Promax"];

function showAllProducts() {
    let content = "";
    // let demo;
    for (let i = 0; i <productList.length; i++) {
        
        // demo += 'So iep theo la ? don vi';
        
        
        content += '<tr>\n' +
                        '<td>'+productList[i]+'</td>\n' + 
                        '<td><button onclick="editProducts('+i+')">Sửa</button></td>\n' +
                        '<td><button onclick="delProducts('+i+')">Xóa</button></td>\n' +
                    '</tr>'
    }
    document.getElementById("products").innerHTML = content;
}showAllProducts();

function createNewProducts() {
    let newP = document.getElementById("newP").value;
    productList.push(newP);
    showAllProducts();
    document.getElementById("newP").value = "";
}

function delProducts(index) {
    productList.splice(index, 1);
    showAllProducts();
}

//Ham de edit
// sua san pham theo tham so index
// cho nguoi dung nhap vao sp moi
// gan lai sp cho sp cu
// hien thi lai danh sach
function  editProducts(index) {
    let newValue = prompt('Moi ban nhap ten moi' , productList[index]);
    productList[index] = newValue;
    showAllProducts();
}