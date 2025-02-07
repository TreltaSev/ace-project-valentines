import click
from pyucc import console, colors, symbols
import sys
import os

@click.group(invoke_without_command=True)
@click.pass_context
@click.option("--releasemessage", prompt="Title this release")
def cli(ctx, releasemessage: str):
    os.system("git add .")
    os.system(f'git commit -m "[release] {releasemessage}"')
    # os.system("git push")

if __name__ == "__main__":
    cli()