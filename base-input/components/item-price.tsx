import React, {useState, useEffect} from 'react';
import {ScrollView, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {PropsPrice} from '../model/base-input-model';
import {OPTION} from '../utils';

function ItemPrice({
  styleViewSuggestion,
  styleOptionsSuggestion,
  styleTextSuggestion,
  onPressSuggestion,
  dataText,
}: PropsPrice) {
  const [heightSuggestion, setHeightSuggestion] = useState<number>(30);

  //handle
  useEffect(() => {
    if (styleOptionsSuggestion) {
      const {height} = styleOptionsSuggestion;
      if (height) {
        setHeightSuggestion(height);
      }
    }
  }, [styleOptionsSuggestion]);

  return (
    <ScrollView
      contentContainerStyle={[
        styles.suggestionView,
        {height: heightSuggestion},
      ]}
      style={[{width: '100%'}, styleViewSuggestion]}
      horizontal={true}
      keyboardShouldPersistTaps="always"
      nestedScrollEnabled={true}>
      <TouchableOpacity
        style={styleOptionsSuggestion}
        onPress={() => onPressSuggestion(OPTION.FIRST)}>
        <Text style={styleTextSuggestion}>{dataText.first}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styleOptionsSuggestion}
        onPress={() => onPressSuggestion(OPTION.SECOND)}>
        <Text style={styleTextSuggestion}>{dataText.second}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styleOptionsSuggestion}
        onPress={() => onPressSuggestion(OPTION.THIRD)}>
        <Text style={styleTextSuggestion}>{dataText.third}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  suggestionView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 1,
    zIndex: 1,
    // flex: 1,
  },
  text: {
    fontSize: 10,
    marginLeft: 10,
  },
});

export default ItemPrice;
