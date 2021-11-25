

// Helper para hacer las peticiones http al servidor en internet, aquí estamos es subiendo una imagen al servidos
export const fileUpload = async( file ) => {
  
    const cloudUrl = 'https://api.cloudinary.com/v1_1/dlwjvyfec/upload';


    const formData = new FormData();

    formData.append('upload_preset', 'react-journal');
    formData.append('file', file);


    try {
        const resp = await fetch(cloudUrl, {
            method: 'POST',
            body: formData
        });

        if (resp.ok) {
            const cloudResp = await resp.json();
            return cloudResp.secure_url;
        }else{
            throw await resp.json();
        }
    } catch (error) {
        throw error;
    }


    // return ur de la imagen

}

