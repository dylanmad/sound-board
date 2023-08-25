require "application_system_test_case"

class PresetsTest < ApplicationSystemTestCase
  setup do
    @preset = presets(:one)
  end

  test "visiting the index" do
    visit presets_url
    assert_selector "h1", text: "Presets"
  end

  test "should create preset" do
    visit presets_url
    click_on "New preset"

    click_on "Create Preset"

    assert_text "Preset was successfully created"
    click_on "Back"
  end

  test "should update Preset" do
    visit preset_url(@preset)
    click_on "Edit this preset", match: :first

    click_on "Update Preset"

    assert_text "Preset was successfully updated"
    click_on "Back"
  end

  test "should destroy Preset" do
    visit preset_url(@preset)
    click_on "Destroy this preset", match: :first

    assert_text "Preset was successfully destroyed"
  end
end
