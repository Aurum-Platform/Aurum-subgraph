# Sub-graph of aurum protocol
sub-graph deployed [here](https://thegraph.com/studio/subgraph/aurum/)

## Deployment commands
 - Install graph cli using npm `bash npm install -g @graphprotocol/graph-cli`
 - Initialize your subgraph `bash graph init --studio aurum`
 - Authenticate within the CLI, build and deploy your subgraph to the Studio `bash graph auth --studio key`
 - Enter the subgraph `bash cd aurum-subgraph`
 - Build subraph `bash graph codegen && graph build`
 - Deploy subgraph `bash graph deploy --studio aurum`