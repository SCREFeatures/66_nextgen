Script.engineTest();
if (Script.platform == "Android") {
  Script.engineToast("OK 3");
  Script.engineDebugTurn(1);
  Script.engineTestPromonAppAttestation("54d15b9bb9cb315b6574bc5bd59cef836710e9f0e095e4b474886947ab430c39", "https://ru-central-02.rldv1.dev/attest", true)
}
