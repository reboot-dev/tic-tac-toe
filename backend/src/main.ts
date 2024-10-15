import { PartialMessage } from "@bufbuild/protobuf";
import { Application, ReaderContext, WriterContext } from "@reboot-dev/reboot";
import {
  Game,
  HistoryRequest,
  HistoryResponse,
  UpdateRequest,
  UpdateResponse,
} from "../../api/tic_tac_toe/v1/game_rbt.js";


class GameServicer extends Game.Interface {

  async history(
    context: ReaderContext,
    { moves }: Game.State,
    _request: HistoryRequest
  ): Promise<PartialMessage<HistoryResponse>> {
    return { moves };
  }

  async update(
    context: WriterContext,
    state: Game.State,
    { moves }: UpdateRequest
  ): Promise<PartialMessage<UpdateResponse>> {
    state.moves = moves;
    return {};
  }
}


const initialize = async (context) => {
  await Game.construct({ id: "GAME" }).idempotently().update(context, { moves: [] });
};

new Application({
  servicers: [GameServicer],
  initialize,
}).run();
