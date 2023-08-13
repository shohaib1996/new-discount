function isValidPhotoName(photoName, imageExtension){
    if (typeof photoName !== "string"){
        return "Provide a STRING";
    } else {
        for (let item of imageExtension){
            if (photoName.toLowerCase().endsWith(item.toLowerCase())){
                return true
            }
        }
        return false
    }
}
let photo = "image.jpeg";
let extension = [".jpeg", ".PNG", ".jpg", ".ico"];
let validPhoto = isValidPhotoName(photo, extension);
console.log(validPhoto);