import React, { useState } from "react";
import { View, Image, Dimensions, Text } from "react-native";
import ImageZoom from "react-native-image-pan-zoom";
import PDFView from "react-native-view-pdf";

const DisplayImage = (props) => {
  const url = props?.route?.params?.imageUrl;
  const title = props?.route?.params?.title;
  //const type = props?.route?.params?.type;
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Text style={{ fontSize: 20 }}>
        {"Topic Name: "}
        {title}
      </Text>
      {true ? (
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <ImageZoom
            cropWidth={Dimensions.get("window").width}
            cropHeight={Dimensions.get("window").height}
            imageWidth={Dimensions.get("window").width}
            imageHeight={Dimensions.get("window").height}
          >
            <Image
              style={{ width: "100%", height: "100%", resizeMode: "contain" }}
              source={{ uri: url }}
            />
          </ImageZoom>
        </View>
      ) : (
        <PDFView
          fadeInDuration={250.0}
          style={{ flex: 1 }}
          resource={url}
          resourceType={"url"}
          onLoad={() => console.log(`PDF rendered from ${url}`)}
          onError={(error) => console.log("Cannot render PDF", error)}
        />
      )}
    </View>
  );
};

export default DisplayImage;
