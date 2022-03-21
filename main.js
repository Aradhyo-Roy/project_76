var images = ["https://drive.google.com/file/d/1LNOJQZAcqaiQiQ3PEsMXC5xbW2l90Fd6/view?usp=sharing", "https://drive.google.com/file/d/1dCg1n6_r1UEE90HgxTBGA13cYgB92wmA/view?usp=sharing", "https://drive.google.com/file/d/1nf__dSyvwxPF3NZsXevrBqM3NylZmFPs/view?usp=sharing", "https://drive.google.com/file/d/1hizwwIq6XYUladMCpHnPVwxBz3vu2WXs/view?usp=sharing", "https://drive.google.com/file/d/1sFrSbA3hyuKfqPBBt3Jnmq9Jf4NUzZSW/view?usp=sharing", "https://drive.google.com/file/d/1hizwwIq6XYUladMCpHnPVwxBz3vu2WXs/view?usp=sharing", "https://drive.google.com/file/d/14Oryn-SzjL9es8dnrYw20JsEhDyNpQx4/view?usp=sharing"];
var names = ["Debashis roy", "Ram krishna mazumdar", "Annapurna Mazumdar", "Sangeeta mazumdar", "Soumit mazumdar", "Soumita mazumdar"]; 

console.log(names);
document.getElementById("family_members_name");
console.log(images);
document.getElementById("family_member_image");

var i = 0;

var number_of_family_member_in_array  = 5;

var members_image1=0;
console.log(members_image1);

var members_image2=1;
console.log(members_image2);

var members_image3=2;
console.log(members_image3);

var members_image4=3;
console.log(members_image4);

var members_image5=4;
console.log(members_image5);


var members_name1=0;
console.log(members_image1);

var members_name2=1;
console.log(members_image2);

var members_name3=2;
console.log(members_image3);

var members_name4=3;
console.log(members_image4);

var members_name5=4;
console.log(members_image5);

function update(){
    i++
    var number_of_family_member_in_array=5;
    if (i > number_of_family_member_in_array) {
        i=0;
    }
    var updated_image=images[i];

    var updated_name=images[i];

    document.getElementById("family_member_image").src = updated_image;

    document.getElementById("family_members_name").innerHTML = updated_name;

}