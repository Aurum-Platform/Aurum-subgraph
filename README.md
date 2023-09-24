# Sub-graph of aurum protocol
sub-graph deployed [here](https://thegraph.com/studio/subgraph/aurum/)

## Deployment commands
 - Install graph cli using npm `npm install -g @graphprotocol/graph-cli`
 - Initialize your subgraph `graph init --studio aurum`
 - Authenticate within the CLI, build and deploy your subgraph to the Studio `graph auth --studio key`
 - Enter the subgraph `cd aurum-subgraph`
 - Build subraph `graph codegen && graph build`
 - Deploy subgraph `graph deploy --studio aurum`