// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import gltfjsx from "../../lib/src/gltfjsx";
import prettier from "prettier";

export default async function transform(req, res) {
  const { body } = req;
  const { name, types } = req.query;
  const code = await gltfjsx(body, name, { types });

  res.status(200).json({
    code: prettier.format(code, {
      semi: false,
      printWidth: 80,
      singleQuote: true,
      jsxBracketSameLine: true,
      parser: types ? "babel-ts" : "babel",
    }),
  });
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "5mb",
    },
  },
};
