const config = {
  "ipfs": "https://ipfs.hivebp.io/ipfs/",
  "atomic_api": "https://wax.api.atomicassets.io",
  "app_name": "goldmandio",
  "game_contract": "plamenplagam",
  "drops_contract": "neftyblocksd",
  "packs_contracts": ["atomicpacksx", "neftyblocksp"]
} 

export const getAssets = (user) => {
  return fetch(config.atomic_api + `/atomicmarket/v1/assets?&page=1&owner=${user}`).then((res) => res.json())
}

export const getCollections = (collections) => {
  return fetch(
      config.atomic_api + `/atomicmarket/v1/stats/collections?symbol=WAX&page=1&limit=100&collection_whitelist=${
          collections.join(',')}`
  ).then(
      res => res.json());
};

export const setLandAction = async (activeUser, asset) => {
  const userName = activeUser['accountName'];

  await activeUser.signTransaction({
      actions: [{
          account: config.game_contract,
          name: 'setland',
          authorization: [{
              actor: userName,
              permission: activeUser['requestPermission'],
          }],
          data: {
              referrer: config.app_name,
              asset_id: asset.assetId,
              claimer: userName
          }
      }]
  }, {
      expireSeconds: 300, blocksBehind: 0,
  });
};

export const registerAction = async (activeUser, accountName, asset) => {
  const userName = activeUser['accountName'];

  await activeUser.signTransaction({
      actions: [{
          account: config.game_contract,
          name: 'reg',
          authorization: [{
              actor: userName,
              permission: activeUser['requestPermission'],
          }],
          data: {
              referrer: config.app_name,
              race: asset.assetId,
              claimer: userName
          }
      }]
  }, {
      expireSeconds: 300, blocksBehind: 0,
  });
};
