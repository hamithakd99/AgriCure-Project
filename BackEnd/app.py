# from flask import Flask

# app = Flask(__name__)

# @app.route('/')
# def hello_world():
#     return 'Hello, World!'

# if __name__ == '__main__':
#     app.run(debug=True)

# import tensorflow_hub as hub
# from flask import Flask, request, jsonify
# from PIL import Image
# import numpy as np
# import tensorflow as tf
# import io

# app = Flask(__name__)

# # Load your trained model
# model = tf.keras.models.load_model('tea_sickness_model.h5', custom_objects={'KerasLayer': hub.KerasLayer})

# # Function to preprocess image
# def preprocess_image(image):
#     img = image.resize((224, 224))  # Resize to model input size
#     img = np.array(img) / 255.0  # Normalize pixel values
#     img = np.expand_dims(img, axis=0)  # Add batch dimension
#     return img

# # Route to handle image upload
# @app.route('/predict', methods=['POST'])
# def predict():
#     if 'file' not in request.files:
#         return jsonify({'error': 'No file uploaded'}), 400

#     file = request.files['file']
#     if file:
#         # Open the image file
#         img = Image.open(file.stream)

#         # Preprocess the image
#         processed_img = preprocess_image(img)

#         # Make prediction
#         prediction = model.predict(processed_img)
#         predicted_class = np.argmax(prediction)

#         # Respond with the predicted disease (e.g., you can map classes to disease names here)
#         diseases = ['Red Leaf Spot', 'Algal Leaf Spot', 'Bird’s Eyespot', 'Gray Blight', 'White Spot', 'Anthracnose', 'Brown Blight']
#         predicted_disease = diseases[predicted_class]  # Map predicted class to disease name

#         # Respond with the predicted disease
#         return jsonify({'predicted_disease': predicted_disease})

#     return jsonify({'error': 'Something went wrong'}), 500

# if __name__ == '__main__':
#     app.run(debug=True)

#####################################

from flask import Flask, request, jsonify
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing.image import img_to_array
import tensorflow_hub as hub
from tensorflow.keras.models import load_model
from PIL import Image
import numpy as np
import os

app = Flask(__name__)

# Load the pre-trained model (make sure 'model.h5' is in your project directory)
# model = load_model("tea_sickness_model.h5")
model = load_model("tea_sickness_model.h5", custom_objects={'KerasLayer': hub.KerasLayer})

# Define a function to process the uploaded image
def process_image(image_path):
    image = Image.open(image_path)
    image = image.resize((128, 128))  # Resize the image to the input size of your model
    image = img_to_array(image)
    image = np.expand_dims(image, axis=0)  # Add a batch dimension
    image = image / 255.0  # Normalize the image (depending on how your model was trained)
    return image

# Endpoint for handling image upload and predicting disease
@app.route("/predict", methods=["POST"])
def predict():
    if "file" not in request.files:
        return jsonify({"error": "No file provided"}), 400

    file = request.files["file"]
    if file.filename == "":
        return jsonify({"error": "No selected file"}), 400

    try:
        # Save the file to a temporary location
        file_path = os.path.join("temp", file.filename)
        file.save(file_path)

        # Process the image and make a prediction
        image = process_image(file_path)
        prediction = model.predict(image)
        predicted_class = np.argmax(prediction, axis=1)[0]

        # Clean up the temporary file
        os.remove(file_path)

        # Map predicted class index to disease name
        disease_classes = ["Red Leaf Spot", "Algal Leaf Spot", "Gray Blight", "White Spot", "Anthracnose", "Brown Blight"]
        predicted_disease = disease_classes[predicted_class]

        return jsonify({"predicted_disease": predicted_disease})

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    # Ensure temp directory exists
    if not os.path.exists("temp"):
        os.makedirs("temp")
    app.run(debug=True)
