


import { Icon, Label, NativeTabs } from 'expo-router/unstable-native-tabs';

export default function TabLayout() {
  return (
    <NativeTabs >
      <NativeTabs.Trigger name="index">
        <Label>Sesh</Label>
        <Icon sf="sportscourt.fill" drawable="custom_android_drawable" />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="map">
        <Icon sf="map" drawable="custom_settings_drawable" />
        <Label>Map</Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="addSesh">
        <Icon sf="plus.circle.fill" drawable="custom_settings_drawable" />
        <Label>Add Sesh</Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="activity">
        <Icon sf="figure.soccer" drawable="custom_settings_drawable" />
        <Label>Activity</Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="profile">
        <Icon sf="person.crop.circle.fill" drawable="custom_settings_drawable" />
        <Label>Profile</Label>
      </NativeTabs.Trigger>

    </NativeTabs>
  );
}

