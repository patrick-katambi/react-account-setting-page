import { Notifications } from "./components/notifications/notifications";
import { SectionTitle } from "./components/section-title";
import { Select } from "./components/select/select";

export function AccountSettings() {
  return (
    <>
      <SectionTitle />
      <Select
        settingList={[
          "Profile & branding",
          "Users",
          "Notifications",
          "Subscription",
          "Questionnaires",
        ]}
      />
      <Notifications />
    </>
  );
}
